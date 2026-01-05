import { Module } from '@nestjs/common';
import { IntervalSchedulerService } from './interval.scheduler/interval.scheduler.service';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [DiscoveryModule],
  providers: [IntervalSchedulerService],
})
export class SchedulerModule {}
