import { Controller, Get, Post, Body, Patch, Param, Delete ,Query} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PaginationDTO } from 'src/common/dto/pagination.dto';
import { PaginationValidationPipe } from 'src/common/pipes/paginations.pipe';
import { FindByIdPipeCustom } from 'src/common/pipes/find-by-id.pipe';
import { FindById } from 'src/common/dto/find-by-id.dto';
import { UpdatePlayerPipe } from './pipes/update-player.pipe';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.createPlayer(createPlayerDto);
  }

  @Get()
  findAll(@Query(PaginationValidationPipe) Pagination: PaginationDTO) {
    return this.playersService.findAll(Pagination);
  }

  @Get(':id')
  findOne(@Param(FindByIdPipeCustom) id:FindById) {
    return this.playersService.findOne(id);
  }

  @Patch(':id')
  update(@Param(FindByIdPipeCustom) id:FindById, @Body(UpdatePlayerPipe) updatePlayer: UpdatePlayerDto) {
    return this.playersService.update(id, updatePlayer);
  }

  @Delete(':id')
  remove(@Param(FindByIdPipeCustom) id:FindById) {
    return this.playersService.remove(id);
  }
}
