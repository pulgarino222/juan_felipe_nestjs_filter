import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PaginationDTO } from 'src/common/dto/pagination.dto';
import { PaginationValidationPipe } from 'src/common/pipes/paginations.pipe';
import { FindByIdPipeCustom } from 'src/common/pipes/find-by-id.pipe';
import { FindById } from 'src/common/dto/find-by-id.dto';
import { UpdatePlayerPipe } from './pipes/update-player.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('players')
@UseGuards(JwtAuthGuard)
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all players with pagination' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved players.' })
  findAll(@Query(PaginationValidationPipe) Pagination: PaginationDTO) {
    return this.playersService.findAll(Pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a player by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved player.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Player ID' })
  findOne(@Param('id', new FindByIdPipeCustom()) id: FindById) {
    return this.playersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a player by ID' })
  @ApiResponse({ status: 200, description: 'Successfully updated player.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Player ID' })
  update(@Param('id', new FindByIdPipeCustom()) id: FindById, @Body(UpdatePlayerPipe) updatePlayer: UpdatePlayerDto) {
    return this.playersService.update(id, updatePlayer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a player by ID' })
  @ApiResponse({ status: 200, description: 'Successfully deleted player.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Player ID' })
  remove(@Param('id', new FindByIdPipeCustom()) id: FindById) {
    return this.playersService.remove(id);
  }

  @Patch(':id/match-random-tournament')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Match a player to a random tournament' })
  @ApiResponse({ status: 200, description: 'Player successfully matched to a tournament.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', required: true, description: 'Player ID' })
  async matchPlayerToRandomTournament(@Param('id') playerId: string): Promise<{ message: string }> {
    return this.playersService.matchPlayerToRandomTournament(playerId);
  }
}
