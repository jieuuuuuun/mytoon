export class BannerDTO {
  id: number;
  title: string;
  imageUrl: string;
  isActive: number;
  sortOrder: number;
  startAt: Date;
  endAt: Date;
  subCategoryId: number;
}

export class BannerCreateDTO {
  id: number;
  title: string;
  imageUrl: string;
  subCategoryId: number;
}
