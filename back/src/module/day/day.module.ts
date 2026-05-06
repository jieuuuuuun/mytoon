import { Module } from '@nestjs/common';
import { DayController } from 'src/controller/day/day.controller';
import { DayService } from 'src/service/day/day.service';

@Module({
  exports: [DayService],
  controllers: [DayController],
  providers: [DayService],
})
export class DayModule {}
