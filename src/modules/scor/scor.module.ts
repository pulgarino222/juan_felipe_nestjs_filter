import { Module } from '@nestjs/common';
import { ScorService } from './scor.service';
import { ScorController } from './scor.controller';

@Module({
  controllers: [ScorController],
  providers: [ScorService],
})
export class ScorModule {}
