import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { MemberController } from 'src/controller/member/member.controller.js';
import { MemberRepository } from 'src/repository/member/member.repository.js';
import { MemberService } from 'src/service/member/member.service.js';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [MemberController],
  providers: [MemberRepository, MemberService],
  exports: [MemberRepository, MemberService],
})
export class MemberModule {}
