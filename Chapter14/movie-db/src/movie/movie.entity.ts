import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Movie')
export class Movie {
  @PrimaryGeneratedColumn
  id number;

  @Column()
  title: string;

  @Column()
  year: number;
}
