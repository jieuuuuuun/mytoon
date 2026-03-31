import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { CategoryService } from 'src/service/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //카테고리 전체 목록
  @ApiOperation({ summary: '카테고리 전체 조회' })
  @Get('')
  @HttpCode(200)
  async getCategories() {
    const categories = await this.categoryService.getCategory();
    return new ApiResponse('카테고리 전체조회 완료하였습니다.', categories);
  }
}
