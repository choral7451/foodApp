import { Controller, Get, Render } from '@nestjs/common';
import { RankService } from './rank.service';

@Controller()
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('/rank')
  @Render('rank')
  rank() {
    return '';
  }
}
