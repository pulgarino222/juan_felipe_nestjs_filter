import { PartialType } from '@nestjs/swagger';
import { CreateScorDto } from './create-scor.dto';

export class UpdateScorDto extends PartialType(CreateScorDto) {}
