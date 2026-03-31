import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controller/category/category.controller';
import { CategoryRepository } from 'src/repository/category/category.repository';
import { CategoryService } from 'src/service/category/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryService],
})
export class CategoryModule {}
