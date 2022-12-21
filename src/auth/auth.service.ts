import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { AuthCredential } from './types/AuthCredential';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Auth)
        private auth: Repository<Auth>,
        private jwtService: JwtService
    ) { }

    signUp = async (authCredential: AuthCredential): Promise<void> => {

        const { username, password } = authCredential
        const auth = new Auth();
        auth.username = username;
        const dSalt = await bcrypt.genSalt();
        auth.salt = dSalt
        auth.password = await this.hashPassword(password, dSalt);
        try {
            await this.auth.save(auth);
        } catch (error) {
            console.log({error})
            if (error.code === '23505')
                throw new ConflictException("Username already exist")
            throw new InternalServerErrorException()

        }
    }

    validatePassword = async (authCredential: AuthCredential): Promise<{ accessToken: string }> => {

        const { username, password: enteredPassword } = authCredential;

        const user = await this.auth.findOne({ where: { username } });
        if (user) {
            const { salt, password } = user
            const hash = await bcrypt.hash(enteredPassword, salt)
            if (password === hash) {
                const payload = { username }
                const accessToken = await this.jwtService.sign(payload);
                return { accessToken }
            } else {
                throw new UnauthorizedException("Incorrect password")
            }
        } else {
            throw new UnauthorizedException("User not Exist")
        }
    }

    private hashPassword = async (password: string, salt: string): Promise<string> => {
        return await bcrypt.hash(password, salt)
    }

}
