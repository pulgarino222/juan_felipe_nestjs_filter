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
  Query,
  UseGuards
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TournametService } from './tournamet.service';
import { CreateTournametDto } from './dto/create-tournamet.dto';
import { Tournament } from './entities/tournamet.entity';
import { PaginationDTO } from 'src/common/dto/pagination.dto';
import { PaginationValidationPipe } from 'src/common/pipes/paginations.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('tournaments')
@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournametService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all tournaments with pagination' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved tournaments.' })
  async getAllTournaments(@Query(PaginationValidationPipe) paginationDto: PaginationDTO): Promise<{ tournaments: Tournament[], total: number }> {
    return this.tournamentService.getAllTournaments(paginationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiResponse({ status: 201, description: 'Successfully created tournament.' })
  async create(@Body() CreateTournametDto: CreateTournametDto): Promise<Tournament> {
    return this.tournamentService.createTournament(CreateTournametDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a tournament by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved tournament.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Tournament ID' })
  async findOne(@Param('id') id: string): Promise<Tournament> {
    return this.tournamentService.getTournamentById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a tournament by ID' })
  @ApiResponse({ status: 200, description: 'Successfully updated tournament.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Tournament ID' })
  async update(@Param('id') id: string, @Body() updateTournamentDto: Partial<CreateTournametDto>): Promise<Tournament> {
    return this.tournamentService.updateTournament(id, updateTournamentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tournament by ID' })
  @ApiResponse({ status: 204, description: 'Successfully deleted tournament.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Tournament ID' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.tournamentService.deleteTournament(id);
  }
}
