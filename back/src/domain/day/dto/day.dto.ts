import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class DayDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: '월', description: '요일' })
  @IsString()
  dayOfWeek!: string;

  @ApiProperty({ example: 'mon', description: 'url' })
  @IsString()
  slug!: string;
}
