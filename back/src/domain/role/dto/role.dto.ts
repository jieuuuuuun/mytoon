import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { MemberRoleDTO } from './memberRole.dto';

export class RoleDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: 'admin', description: '관리자레벨' })
  @IsString()
  name!: string;

  @ApiProperty({
    example: [{ id: 1, memberId: 1, roleId: 1 }],
    description: 'memberRole',
  })
  members!: MemberRoleDTO[];
}
