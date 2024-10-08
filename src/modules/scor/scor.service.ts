import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from '../scor/entities/scor.entity';

@Injectable()
export class ScoresService {
    constructor(
        @InjectRepository(Score)
        private readonly scoresRepository: Repository<Score>,
    ) {}

    async findAll(): Promise<Score[]> {
        try {
            return await this.scoresRepository.find({ relations: ['player', 'tournament'] });
        } catch (error) {
            console.error('Error fetching scores:', error.message);
            throw new InternalServerErrorException('Error fetching scores; please try again later.');
        }
    }

    async findOne(id: string): Promise<Score> {
        try {
            const score = await this.scoresRepository.findOne({
                where: { id },
                relations: ['player', 'tournament'],
            });
            if (!score) {
                throw new NotFoundException(`Score with id ${id} not found.`);
            }
            return score;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            console.error('Error finding score:', error.message);
            throw new InternalServerErrorException('Error finding the score; please try again later.');
        }
    }
}

