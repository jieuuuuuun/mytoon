import { Module } from '@nestjs/common';
import { BannerController } from 'src/controller/banner/banner.controller';
import { BannerService } from 'src/service/banner/banner.service';

@Module({
  controllers: [BannerController],
  providers: [BannerService],
  exports: [BannerService],
})
export class BannerModule {}
