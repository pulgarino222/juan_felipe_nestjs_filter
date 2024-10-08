import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TournametService } from './tournamet.service';
import { CreateTournametDto } from './dto/create-tournamet.dto';
import { Tournament } from './entities/tournamet.entity';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournametService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() CreateTournametDto: CreateTournametDto): Promise<Tournament> {
    return this.tournamentService.createTournament(CreateTournametDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tournament> {
    return this.tournamentService.getTournamentById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTournamentDto: Partial<CreateTournametDto>): Promise<Tournament> {
    return this.tournamentService.updateTournament(id, updateTournamentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tournamentService.deleteTournament(id);
  }
}
