import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MemberController } from 'src/controller/member/member.controller';
import { MemberRepository } from 'src/repository/member/member.repository';
import { MemberService } from 'src/service/member/member.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [MemberController],
  providers: [MemberRepository, MemberService],
  exports: [MemberRepository, MemberService],
})
export class MemberModule {}
