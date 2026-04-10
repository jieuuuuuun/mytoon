import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SubCategoryDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: '로맨스', description: '서브카테고리' })
  name!: string;

  @ApiProperty({ example: 'romance', description: 'url주소' })
  slug!: string;

  @ApiProperty({ example: 1, description: '메인 카테고리 아이디' })
  mainCategoryId!: number;
}

export class SubCategoriesDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: '로맨스', description: '서브카테고리' })
  name!: string;

  @ApiProperty({ example: 'romance', description: 'url주소' })
  slug!: string;
}

export class SubCategoryCreateDTO {
  @ApiProperty({ example: '로맨스', description: '서브카테고리' })
  name!: string;

  @ApiProperty({ example: 'romance', description: 'url주소' })
  slug!: string;
}
