import { Test, TestingModule } from '@nestjs/testing';
import { MessageFormaterService } from './message-formater.service';

describe('MessageFormaterService', () => {
  let service: MessageFormaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageFormaterService],
    }).compile();

    service = module.get<MessageFormaterService>(MessageFormaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
