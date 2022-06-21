import { Controller, Get, Post, Render, Req } from '@nestjs/common';
import { EstimationService } from './estimation.service';
import { Request } from 'express';
@Controller()
export class EstimationController {
  constructor(private readonly estimationService: EstimationService) {}

  @Get('/estimation')
  @Render('estimation')
  estimation() {
    return { message: 'Hello world!' };
  }

  @Post('/estimation')
  async start() {
    return await this.estimationService.get();
  }

  @Post('/getData')
  async getData(
    @Req() req: Request, //
  ) {
    console.log('asdasd');
    console.log();
    return await this.estimationService.getData({ req });
  }
}
