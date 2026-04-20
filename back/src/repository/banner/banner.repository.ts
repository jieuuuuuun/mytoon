import { Injectable } from '@nestjs/common';
import { BannerCreateDTO } from 'src/domain/banner/dto/banner.dto';
import { PrismaService } from 'src/service/prisma/prisma.service';

@Injectable()
export class BannerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(banner: BannerCreateDTO) {
    const bannerCreate = {
      title: banner.title,
      imageUrl: banner.imageUrl,
      subCategoryId: banner.subCategoryId,
      startAt: new Date(),
      endAt: new Date('2026-12-31'),
      isActive: 1,
      sortOrder: 0,
    };

    return await this.prisma.banner.create({
      data: {
        ...bannerCreate,
      },
    });
  }
}
