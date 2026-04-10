import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { SubCategoriesDTO } from './subCategory.dto';

export class MainCategoryDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: '웹툰', description: '메인카테고리' })
  name!: string;

  @ApiProperty({ example: 'webtoon', description: 'url주소' })
  slug!: string;

  @ApiProperty({
    example: [
      { id: 1, name: '로맨스', slug: 'romance' },
      { id: 2, name: '판타지', slug: 'fantasy' },
    ],
    description: '서브카테고리 리스트',
  })
  subCategories!: SubCategoriesDTO[];
}

export class MainCategoryCreateDTO {
  @ApiProperty({ example: '웹툰', description: '메인카테고리' })
  name!: string;

  @ApiProperty({ example: 'webtoon', description: 'url주소' })
  slug!: string;
}
