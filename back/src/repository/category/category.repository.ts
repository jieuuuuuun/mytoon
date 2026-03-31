import { Injectable } from '@nestjs/common';
import { MainCategoryDTO } from 'src/domain/category/dto/mainCategory.dto';
import { PrismaService } from 'src/service/prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  //카테고리 전체 조회
  async findCategoryAll(): Promise<MainCategoryDTO[]> {
    return await this.prisma.mainCategory.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        subCategories: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }
}
