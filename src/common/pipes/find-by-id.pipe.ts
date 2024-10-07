import {
    ArgumentMetadata,
    BadRequestException,
    Inject,
    Injectable,
    PipeTransform,
} from '@nestjs/common';
import { FindById } from '../dto/find-by-id.dto'; 
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { PlayersService } from '../../modules/players/players.service'; 

@Injectable()
export class FindByIdPipeCustom implements PipeTransform {
    constructor(@Inject() private playersService: PlayersService) {}

    async transform(value: any, { metatype }: ArgumentMetadata) {
        
        if (metatype !== FindById) {
            return value;
        }

        const object = plainToInstance(FindById, { id: value });
        const player = await this.playersService.findOne({ id: value });
        if (!player) {
            throw new BadRequestException('The ID was not found.');
        }

        
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new BadRequestException('Validation error: Invalid format for ID.');
        }
        return value;
    }
}
