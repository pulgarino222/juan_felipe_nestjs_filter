import { Test, TestingModule } from '@nestjs/testing';
import { ScorService } from './scor.service';

describe('ScorService', () => {
  let service: ScorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScorService],
    }).compile();

    service = module.get<ScorService>(ScorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
