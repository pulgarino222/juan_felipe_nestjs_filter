
import { IsEmail, IsNumber, IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    fullname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsBoolean()
    @IsOptional() 
    isActive?: boolean = true; 

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;

    @IsNotEmpty()
    @IsNumber()
    whatsapp: number;
}

