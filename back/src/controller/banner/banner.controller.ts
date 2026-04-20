import {
  Body,
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { BannerCreateDTO } from 'src/domain/banner/dto/banner.dto';
import { MulterFile } from 'src/domain/member/dto/member.dto';
import { BannerService } from 'src/service/banner/banner.service';
import type { Express } from 'express';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @ApiOperation({ summary: '배너등록' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        title: { type: 'string' },
        subCategoryId: { type: 'number' },
        startAt: { type: 'string', format: 'date-time' },
        endAt: { type: 'string', format: 'date-time' },
        isActive: { type: 'number' },
        sortOrder: { type: 'number' },
      },
    },
  })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(201)
  async bannerCrate(
    @UploadedFile() file: Express.Multer.File,
    @Body() banner: BannerCreateDTO,
  ) {
    const multerFile: MulterFile = file as MulterFile;
    return await this.bannerService.createBanner(multerFile, banner);
  }
}
