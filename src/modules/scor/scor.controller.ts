import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScorService } from './scor.service';
import { CreateScorDto } from './dto/create-scor.dto';
import { UpdateScorDto } from './dto/update-scor.dto';

@Controller('scor')
export class ScorController {
  constructor(private readonly scorService: ScorService) {}

  @Post()
  create(@Body() createScorDto: CreateScorDto) {
    return this.scorService.create(createScorDto);
  }

  @Get()
  findAll() {
    return this.scorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScorDto: UpdateScorDto) {
    return this.scorService.update(+id, updateScorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scorService.remove(+id);
  }
}
