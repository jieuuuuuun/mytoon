import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MainCategoryDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: '웹툰', description: '메인카테고리' })
  name: string;

  @ApiProperty({ example: 'webtoon', description: 'url주소' })
  slug: string;
}

export class MainCategoryCreateDTO {
  @ApiProperty({ example: '웹툰', description: '메인카테고리' })
  name: string;

  @ApiProperty({ example: 'webtoon', description: 'url주소' })
  slug: string;
}
