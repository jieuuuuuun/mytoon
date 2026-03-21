import { AuthProvider } from '@prisma/client';

export type MemberResponse = {
  id: number;
  email: string;
  name: string;
  age: number | null;
  createdAt: Date;
  updatedAt?: Date;
  socials: {
    id: number;
    provider: AuthProvider;
    providerId: string | null;
  }[];
};
