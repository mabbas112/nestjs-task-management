import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy} from 'passport-jwt'
import { Auth } from "./auth.entity";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtPayload } from "./types/JwtPayload";
import * as config from 'config'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(
        @InjectRepository(Auth)
        private auth : Repository<Auth>
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.JWT_SECRET || config.get('jwt.secret'),
          })
    }

    async validate(payload: JwtPayload): Promise<Auth> {
        const { username } = payload;
        const user = this.auth.findOne({where: {username}});
        if(!user){
            throw new UnauthorizedException("Invalid credentials");
        }
        return user
    }
}