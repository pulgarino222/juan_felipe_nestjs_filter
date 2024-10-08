import { Injectable } from '@nestjs/common';
import { CreateScorDto } from './dto/create-scor.dto';
import { UpdateScorDto } from './dto/update-scor.dto';

@Injectable()
export class ScorService {
  create(createScorDto: CreateScorDto) {
    return 'This action adds a new scor';
  }

  findAll() {
    return `This action returns all scor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scor`;
  }

  update(id: number, updateScorDto: UpdateScorDto) {
    return `This action updates a #${id} scor`;
  }

  remove(id: number) {
    return `This action removes a #${id} scor`;
  }
}
