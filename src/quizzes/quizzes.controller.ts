import { Controller, Get } from '@nestjs/common';

@Controller('quizzes')
export class QuizzesController {
  @Get()
  getAll() {
    return [
      { id: 1, title: 'Первый квиз' },
      { id: 2, title: 'Второй квиз' },
    ];
  }
}
