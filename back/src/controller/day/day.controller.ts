import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { DayService } from 'src/service/day/day.service';

@Controller('day')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  @ApiOperation({ summary: '연재요일 조회' })
  @Get('')
  @HttpCode(200)
  async getDays() {
    const days = await this.dayService.getDays();
    return new ApiResponse('연재요일 조회 완료되었습니다.', days);
  }
}
