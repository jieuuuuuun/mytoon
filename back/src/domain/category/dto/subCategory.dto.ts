import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SubCategoryDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: '로맨스', description: '서브카테고리' })
  name: string;

  @ApiProperty({ example: 'romance', description: 'url주소' })
  slug: string;
}
