
import { IsEmail, IsNumber, IsString, IsBoolean, IsOptional, IsNotEmpty, IsArray, ArrayNotEmpty} from 'class-validator';
import { LengthNumber } from 'src/common/decorators/valid-digit.decorator';

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
    @LengthNumber(10)
    whatsapp: number;

    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true }) 
    roles: number[];

}

