import { Test, TestingModule } from '@nestjs/testing';
import { ScorController } from './scor.controller';
import { ScorService } from './scor.service';

describe('ScorController', () => {
  let controller: ScorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScorController],
      providers: [ScorService],
    }).compile();

    controller = module.get<ScorController>(ScorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
