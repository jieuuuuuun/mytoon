import { Injectable } from '@nestjs/common';
import { S3Service } from '../s3/s3.service';
import { BannerCreateDTO } from 'src/domain/banner/dto/banner.dto';
import { MulterFile } from 'src/domain/member/dto/member.dto';
import { BannerRepository } from 'src/repository/banner/banner.repository';

@Injectable()
export class BannerService {
  constructor(
    private readonly bannerRepository: BannerRepository,
    private readonly s3Service: S3Service,
  ) {}

  async createBanner(file: MulterFile, banner: BannerCreateDTO) {
    if (!file) {
      throw new Error('배너 이미지는 필수입니다.');
    }
    const s3Result = await this.s3Service.uploadFile(file, 'banners');

    return await this.bannerRepository.save({
      ...banner,
      imageUrl: s3Result.originalUrl,
    });
  }
}
