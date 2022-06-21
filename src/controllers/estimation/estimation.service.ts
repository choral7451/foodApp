import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './entities/estimation.entity';

@Injectable()
export class EstimationService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}

  async get() {
    let arr = [];
    const count = await this.imagesRepository.count();

    while (arr.length < 10) {
      const id = Math.ceil(Math.random() * count);
      if (!arr.includes(id)) {
        arr.push(id);
      }
    }

    const data = await this.imagesRepository.findOneBy({
      id: arr[0],
    });

    const result = {
      arr,
      data,
    };

    return result;
  }

  async getData({ req }) {
    const data = await this.imagesRepository.findOneBy({
      id: req.body.id,
    });

    return data;
  }
}
