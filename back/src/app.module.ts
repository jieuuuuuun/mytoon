import { Module } from '@nestjs/common';
import { CoreModule } from './module/core/core.module.js';
import { MemberModule } from './module/member/member.module.js';
import { AuthModule } from './module/auth/auth.module.js';
import { CategoryModule } from './module/category/category.module.js';

@Module({
  imports: [CoreModule, MemberModule, AuthModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
