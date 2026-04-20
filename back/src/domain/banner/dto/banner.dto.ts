import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class BannerDTO {
  id!: number;
  title!: string;
  imageUrl!: string;
  isActive!: number;
  sortOrder!: number;
  startAt!: Date;
  endAt!: Date;
  subCategoryId!: number;
}

export class BannerCreateDTO {
  @ApiProperty({ example: 'jbook 웹툰 출간 기념', description: '배너 타이틀' })
  @IsString()
  title!: string;

  @ApiProperty()
  @IsString()
  imageUrl!: string;

  @ApiProperty({ example: 1, description: '서브카테고리' })
  subCategoryId!: number;

  @ApiProperty({ example: '2026-04-01T00:00:00.000Z', description: '시작일' })
  @IsDateString()
  startAt!: string;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', description: '종료일' })
  @IsDateString()
  endAt!: string;

  @ApiProperty({ example: 1, description: '노출여부' })
  @IsNumber()
  isActive?: number;

  @ApiProperty({ example: 1, description: '정렬' })
  @IsNumber()
  sortOrder?: number;
}
