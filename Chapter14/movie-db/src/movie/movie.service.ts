import { Injectable } from '@nestjs/common';
import { InputMovie, Movie } from './movie.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { InputMovie } from './movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  private data: Movie[] = [
    { id: 1, title: 'Iron Man', year: '2008' },
    { id: 2, title: 'Thor', year: '2011' },
    { id: 3, title: 'Captain America', year: '2011' },
  ];

  getAllMovies(): Promise<Movie[]> {
    return this.data;
  }

  getOneMovie(id: number): Promise<Movie[]> {
    return this.data.find(movie => movie.id === id);
  }

  createNewMovie(movie: InputMovie): Promise<Movie[]> {
    const nextId = Math.max(...this.data.map(movie => movie.id)) + 1;
    const newMovie: Movie = {...movie, id: nextId},
    this.data.push(newMovie);

    return newMovie;
  }

  updateMovie(id: number, movie: Movie): Promise<Movie[]> {
    const index = this.data.findIndex(movie => movie.id === id);
    this.data[index] = movie;

    return movie;
  }

  removeMovie(id: number): Promise<DeleteResult> {
    this.data = this.data.filter(movie => movie.id !== parseInt(id, 10));
  }
}
