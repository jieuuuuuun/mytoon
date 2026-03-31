import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/repository/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  //카테고리 전체 조회
  async getCategory() {
    const categories = await this.categoryRepository.findCategoryAll();

    const response = categories.map((category) => ({
      ...category,
    }));

    return response;
  }
}
