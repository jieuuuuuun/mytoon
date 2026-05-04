import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  /*await prisma.banner.createMany({
    data: [
      {
        title: 'jbook 웹툰 신간 출시',
        imageUrl: 'main_banner_09.jpg',
        startAt: new Date(),
        endAt: new Date('2026-12-31'),
        subCategoryId: 1,
      },
      {
        title: 'jbook 웹소설 신간 출시',
        imageUrl: 'main_banner_03.jpg',
        startAt: new Date(),
        endAt: new Date('2026-12-31'),
        subCategoryId: 7,
      },
      {
        title: 'jbook 도서 신간 출시',
        imageUrl: 'main_banner_04.png',
        startAt: new Date(),
        endAt: new Date('2026-12-31'),
        subCategoryId: 12,
      },
      {
        title: 'jbook 웹툰 신간 출시2',
        imageUrl: 'main_banner_08.jpg',
        startAt: new Date(),
        endAt: new Date('2026-12-31'),
        subCategoryId: 3,
      },
    ],
  });*/

  /*await prisma.role.createMany({
    data: [{ name: 'user' }, { name: 'admin' }],
  });*/

  // await prisma.day.createMany({
  //   data: [
  //     { dayOfWeek: '월', slug: 'mon' },
  //     { dayOfWeek: '화', slug: 'tue' },
  //     { dayOfWeek: '수', slug: 'wed' },
  //     { dayOfWeek: '목', slug: 'thu' },
  //     { dayOfWeek: '금', slug: 'fri' },
  //     { dayOfWeek: '토', slug: 'sat' },
  //     { dayOfWeek: '일', slug: 'sun' },
  //   ],
  // });

  await prisma.memberRole.update({
    where: {
      id: 1,
    },
    data: {
      roleId: 2,
    }
  });
})();
