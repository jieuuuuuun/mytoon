import { Module } from '@nestjs/common';
import { BannerController } from 'src/controller/banner/banner.controller';
import { BannerRepository } from 'src/repository/banner/banner.repository';
import { BannerService } from 'src/service/banner/banner.service';

@Module({
  controllers: [BannerController],
  providers: [BannerService, BannerRepository],
  exports: [BannerService],
})
export class BannerModule {}
