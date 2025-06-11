import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesController } from './quizzes/quizzes.controller';

@Module({
  imports: [],
  controllers: [AppController, QuizzesController],
  providers: [AppService],
})
export class AppModule {}
