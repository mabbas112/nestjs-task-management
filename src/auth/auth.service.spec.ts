import { Repository } from "typeorm"
import { Auth } from "./auth.entity"
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtService } from "@nestjs/jwt";
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

const mockAuthCredentials = { username: 'Test user', password :'Test password' }

describe ('authService specs ', () => {

    let authRepository : Repository<Auth>;
    let jwtService : JwtService;
    let authService : AuthService

    beforeEach( async () => {
        const module : TestingModule = await Test.createTestingModule({
            providers: [ AuthService,JwtService,
            {
                provide : getRepositoryToken(Auth),
                useValue: {
                    save: jest.fn(),
                    findOne: jest.fn()
                }
            }
        ]
        }).compile() 

        authRepository =await module.get<Repository<Auth>>(getRepositoryToken(Auth))
        jwtService =await module.get<JwtService>(JwtService)
        authService = await module.get<AuthService>(AuthService)
    })


    describe('signup', () => {

        let save : any;
        beforeEach(() => {
            save = jest.fn()
            authRepository.create = jest.fn().mockReturnValue({save})
        })

        it('should successfully signup the user', () => {
            save.mockResolvedValue(undefined)
           expect(authService.signUp(mockAuthCredentials)).resolves.not.toThrow()
        })

        it('should throw an exception of username is already exist', () => {
            save.mockResolvedValue({code: '23505'})
            expect(authService.signUp(mockAuthCredentials)).rejects.toThrow(ConflictException)
        })

        it('should throw an exception of internal server error', () => {
            save.mockResolvedValue({code: '121212'})
            expect(authService.signUp(mockAuthCredentials)).rejects.toThrow(InternalServerErrorException)
        })
    })

    describe ('validatePassword', () => {

        let auth;

        beforeEach(() => {
          auth = new Auth();
          auth.username = 'TestUsername';
          auth.validatePassword = jest.fn();
          bcrypt.hash = jest.fn();
          authRepository.findOne = jest.fn();
        });

        // it('should found a user', async () => {
        //     jest.spyOn(authRepository, 'findOne').mockResolvedValue(auth)
        //     bcrypt.hash.mockResolvedValue(true);
        //     auth.validatePassword.mockResolvedValue(true)
        //     const result = await authService.validatePassword(mockAuthCredentials);
        //     console.log({result})
        //     expect(result).toEqual('TestUsername')
        // })

        // it('returns the username as validation is successful', async () => {
        //     userRepository.findOne.mockResolvedValue(user);
        //     user.validatePassword.mockResolvedValue(true);
      
        //     const result = await userRepository.validateUserPassword(mockCredentialsDto);
        //     expect(result).toEqual('TestUsername');
        //   });
      
          it('returns null as user cannot be found', async () => {
            jest.spyOn(authRepository, 'findOne').mockResolvedValue(null)
            const result = await authService.validatePassword(mockAuthCredentials)
            expect(auth.validatePassword).not.toHaveBeenCalled();
            expect(result).toBeNull();
          });

        it("should retrun exception when user not found", () => {

        })
    })

    describe ('hashPassword method', () => {

        it('should return hashed password', async () => {

            bcrypt.hash = jest.fn().mockResolvedValue("ResolvedValue");
            expect(bcrypt.hash).not.toHaveBeenCalled()
            const result = await authService.hashPassword('testpassword', 'uiuhh12h8hw');
            expect(result).toEqual('ResolvedValue')
            expect(bcrypt.hash).toHaveBeenCalledWith('testpassword', 'uiuhh12h8hw')
        
        })
    })
    
})