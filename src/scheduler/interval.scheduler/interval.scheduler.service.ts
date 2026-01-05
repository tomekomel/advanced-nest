import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class IntervalSchedulerService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    throw new Error('Method not implemented.');
  }
}
