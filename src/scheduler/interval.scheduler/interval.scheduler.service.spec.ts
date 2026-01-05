import { Test, TestingModule } from '@nestjs/testing';
import { IntervalSchedulerService } from './interval.scheduler.service';

describe('IntervalSchedulerService', () => {
  let service: IntervalSchedulerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntervalSchedulerService],
    }).compile();

    service = module.get<IntervalSchedulerService>(IntervalSchedulerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
