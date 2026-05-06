import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DayDTO } from 'src/domain/day/dto/day.dto';

@Injectable()
export class DayService {
  constructor(private readonly prisma: PrismaService) {}

  async getDays(): Promise<DayDTO[]> {
    const days = await this.prisma.day.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return days.map((day) => ({
      id: day.id,
      dayOfWeek: day.dayOfWeek,
      slug: day.slug,
    }));
  }
}
