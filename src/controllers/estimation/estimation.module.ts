import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './entities/estimation.entity';
import { EstimationController } from './estimation.controller';
import { EstimationService } from './estimation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Images])],
  providers: [EstimationService],
  controllers: [EstimationController],
})
export class EstimationModule {}
