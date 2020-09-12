import { Test, TestingModule } from '@nestjs/testing';
import { ChampController } from '../champ.controller';

describe('Champ Controller', () => {
  let controller: ChampController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampController],
    }).compile();

    controller = module.get<ChampController>(ChampController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
