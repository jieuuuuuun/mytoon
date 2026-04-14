import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MemberRoleDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: 1, description: 'member 아이디' })
  @IsNumber()
  memberId!: number;

  @ApiProperty({ example: 1, description: 'role 아이디' })
  @IsNumber()
  roleId!: number;
}
