import { ApiProperty } from '@nestjs/swagger';
import { AuthProvider } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { MemberRoleDTO } from 'src/domain/role/dto/memberRole.dto';

export class MemberRegisterDTO {
  // model Member
  @ApiProperty({ example: 'test123@gmail.com', description: '회원 이메일' })
  @IsString()
  email!: string;

  @ApiProperty({ example: '홍길동', description: '회원 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 20, description: '회원 나이' })
  @IsNumber()
  @IsOptional()
  age?: number;

  // model AuthAccount
  @ApiProperty({ example: 'LOCAL', description: '회원 가입 경로' })
  @IsEnum(AuthProvider)
  provider!: AuthProvider;

  @ApiProperty({ example: 'test123!@#', description: '회원 비밀번호' })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({ example: '10011004184', description: '소셜 고유 아이디' })
  @IsString()
  @IsOptional()
  providerId?: string;

  // @ApiProperty({
  //   example: [{ id: 1, memberId: 1, roleId: 2 }],
  //   description: 'memberRole',
  // })
  // roles!: MemberRoleDTO[];
}

export class MemberUpdateDTO {
  @ApiProperty({ example: '홍길동', description: '회원 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 20, description: '회원 나이' })
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'test123!@#', description: '회원 비밀번호' })
  @IsString()
  @IsOptional()
  password?: string;
}

// 로컬에서 로그인 하는 경우
export class LocalLoginDTO {
  @ApiProperty({ example: 'test123@gmail.com', description: '회원 이메일' })
  @IsString()
  email!: string;

  @ApiProperty({ example: 'test123!@#', description: '회원 비밀번호' })
  @IsString()
  password!: string;
}

// 소셜 로그인
export class OAuthLoginDTO {
  // model Member
  @ApiProperty({ example: 'test123@gmail.com', description: '회원 이메일' })
  @IsString()
  email!: string;

  @ApiProperty({ example: '홍길동', description: '회원 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  // model AuthAccount
  @ApiProperty({ example: 'LOCAL', description: '회원 가입 경로' })
  @IsEnum(AuthProvider)
  provider!: AuthProvider;

  @ApiProperty({ example: '10011004184', description: '소셜 고유 아이디' })
  @IsString()
  @IsOptional()
  providerId?: string;
}

// 회원 조회
export class MemberResponseDTO {
  @ApiProperty({ example: 1, description: '아이디' })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: 'test123@gmail.com', description: '회원 이메일' })
  @IsString()
  email!: string;

  @ApiProperty({ example: 'test123!@#', description: '회원 비밀번호' })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({ example: '홍길동', description: '회원 이름' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 20, description: '회원 나이' })
  @IsNumber()
  @IsOptional()
  age?: number;
}

// 파일 입출력용 추가
export type MulterFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
};
