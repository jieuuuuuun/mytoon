import { PrismaClient } from '@prisma/client';
import { MainCategoryCreateDTO } from 'src/domain/category/dto/mainCategory.dto';

const prisma = new PrismaClient();

(async () => {
  // prisma.모델명.메서드명
  // ex) prisma.mainCategory.create()
  // const mainCategory: MainCategoryCreateDTO = {
  //   name: '추천',
  //   slug: '',
  // };
  // const mainCategory1: MainCategoryCreateDTO = {
  //   name: '웹툰',
  //   slug: 'webtoon',
  // };
  // const mainCategory2: MainCategoryCreateDTO = {
  //   name: '웹소설',
  //   slug: 'webnovel',
  // };
  // const mainCategory3: MainCategoryCreateDTO = {
  //   name: '도서',
  //   slug: 'ebook',
  // };
  // const mainCategories = [mainCategory1, mainCategory2, mainCategory3];
  // await prisma.mainCategory.createMany({
  //   data: mainCategories,
  // });
  const mainCategoryList = await prisma.mainCategory.findMany();
  const webtoon = mainCategoryList.find((m) => m.slug === 'webtoon');
  const webnovel = mainCategoryList.find((m) => m.slug === 'webnovel');
  const ebook = mainCategoryList.find((m) => m.slug === 'ebook');
  console.log(mainCategoryList);
  await prisma.subCategory.createMany({
    data: [
      { name: '로맨스', slug: 'romance', mainCategoryId: webtoon!.id },
      { name: '판타지', slug: 'fantasy', mainCategoryId: webtoon!.id },
      { name: '액션', slug: 'action', mainCategoryId: webtoon!.id },
      { name: '무협', slug: 'murim', mainCategoryId: webtoon!.id },
      {
        name: '공포/추리',
        slug: 'horror-mystery',
        mainCategoryId: webtoon!.id,
      },
      { name: '드라마', slug: 'drama', mainCategoryId: webtoon!.id },
    ],
  });
  await prisma.subCategory.createMany({
    data: [
      { name: '로맨스', slug: 'romance', mainCategoryId: webnovel!.id },
      { name: '로판', slug: 'romance-fantasy', mainCategoryId: webnovel!.id },
      { name: '판타지', slug: 'fantasy', mainCategoryId: webnovel!.id },
    ],
  });
  await prisma.subCategory.createMany({
    data: [
      { name: '소설', slug: 'novel', mainCategoryId: ebook!.id },
      {
        name: '인문/사회/역사',
        slug: 'humanities-social-history',
        mainCategoryId: ebook!.id,
      },
      {
        name: '경영/경제',
        slug: 'business-economy',
        mainCategoryId: ebook!.id,
      },
      { name: '에세이/시', slug: 'essay-poetry', mainCategoryId: ebook!.id },
      { name: '자기계발', slug: 'self-development', mainCategoryId: ebook!.id },
    ],
  });
})();
