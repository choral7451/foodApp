import { Controller, Get, Post, Render } from '@nestjs/common';
import { EstimationService } from './estimation.service';

@Controller()
export class EstimationController {
  constructor(private readonly estimationService: EstimationService) {}

  @Get('/estimation')
  @Render('estimation')
  estimation() {
    return { message: 'Hello world!' };
  }

  @Post('/estimation')
  start() {
    return this.estimationService.get();
  }
}
