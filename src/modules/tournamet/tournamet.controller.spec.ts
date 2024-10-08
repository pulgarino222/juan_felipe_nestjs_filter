import { Test, TestingModule } from '@nestjs/testing';
import { TournametController } from './tournamet.controller';
import { TournametService } from './tournamet.service';

describe('TournametController', () => {
  let controller: TournametController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournametController],
      providers: [TournametService],
    }).compile();

    controller = module.get<TournametController>(TournametController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
