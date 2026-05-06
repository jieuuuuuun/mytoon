import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ContentDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;
  title!: string;
  description!: string;
  thumbnail!: string;
  keyword?: string;
  viewsCount!: number;
  rating!: number;

  mainCategoryId!: number;
  subCategoryId!: number;
}
