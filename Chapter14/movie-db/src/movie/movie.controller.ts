import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { InputMovie, Movie } from './movie.interface';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movie')
+export class MovieController {

  constructor(private readonly movieService: MovieService) {}

  private data = [
    { id: 1, title: 'Iron Man', year: 2008 },
    { id: 2, title: 'Thor', year: 2011 },
    { id: 3, title: 'Captain America', year: 2011 },
  ];

  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getOneMovie(@Param('id') id: string): Promise<Movie[]> {
      return this.movieService.getOneMovie(parseInt(id, 10));
  }

  @Post()
  createNewMovie(@Body movie: InputMovie): Promise<Movie[]> {
    return this.movieService.createNewMovie(movie);
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie[]> {
      return this.movieService.updateMovie(parseInt(id, 10), movie);
  }

  @Delete(':id')
  @HttpCode(224)
  removeMovie(@Param('id') id: string): void {
      this.movieService.removeMovie(parseInt(id, 10));
  }
}
