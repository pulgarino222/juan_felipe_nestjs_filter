import { Module } from '@nestjs/common';
import { ScoresService } from './scor.service';
import { ScoresController } from './scor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/scor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Score])],
  exports: [ScoresService],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScorModule {}
