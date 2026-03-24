import { ApiProperty } from '@nestjs/swagger';

export class MemberRoleDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  id: number;
  memberId: number;
  roleId: number;
}
