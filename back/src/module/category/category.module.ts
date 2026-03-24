import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controller/category/category.controller';
import { CategoryService } from 'src/service/category/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
