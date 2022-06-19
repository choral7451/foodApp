import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstimationModule } from './controllers/estimation/estimation.module';
import { HomeModule } from './controllers/home/home.module';
import { RankModule } from './controllers/rank/rank.module';
import 'dotenv/config';

@Module({
  imports: [
    HomeModule,
    RankModule,
    EstimationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PW,
      database: 'foodApp',
      entities: [__dirname + '/controllers/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
