import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Players } from './entities/player.entity';
import { CrudPlayers } from './interface/players.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { PaginationDTO } from 'src/common/dto/pagination.dto';

@Injectable()
export class PlayersService implements CrudPlayers {
  constructor(@InjectRepository(Players) private playersRepository:Repository<Players>){}



  async createPlayer(createPlayer: CreatePlayerDto):Promise<Players> {
    try {
      const { password, confirmPassword } = createPlayer;

     
      if (password !== confirmPassword) {
        throw new BadRequestException('the keys not match ensure that type correct confirm password.');
      }

     
      const encryptedPassword = await bcrypt.hash(password, 10);

      
      const newPlayer = this.playersRepository.create({
        ...createPlayer,
        password: encryptedPassword,
      });

      
      return await this.playersRepository.save(newPlayer);
    } catch (error) {
      console.log('Error in the service creating the player :', error.message);
      if (error.code === '23505') { 
        throw new ConflictException('the email already used.');
      }
      throw new InternalServerErrorException('Error creating the player try again later');
    }
    
  }

  async findAll(pagination: PaginationDTO): Promise<{
    total: number;
    page: number;
    limit: number;
    players: Players[];
}> {
    try {
        const { page, limit } = pagination;

        const skip = (page - 1) * limit;

        
        const [players, total] = await this.playersRepository.findAndCount({
            skip,
            take: limit,
            // relations: ['roles'],  
        });

        return {
            total,
            page,
            limit,
            players,
        };
    } catch (error) {
        console.log('Error from service of findAll players:', error.message);
        throw new InternalServerErrorException('Error fetching players, try again later.');
    }
}


  // findOne(id: number) {
  //   return `This action returns a #${id} player`;
  // }

  // update(id: number, updatePlayerDto: UpdatePlayerDto) {
  //   return `This action updates a #${id} player`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} player`;
  // }
}
