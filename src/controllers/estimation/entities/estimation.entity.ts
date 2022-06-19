import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  area: string;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  price: number;
}
