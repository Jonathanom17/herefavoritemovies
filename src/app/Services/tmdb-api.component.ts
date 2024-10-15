import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IMovies, Result } from "../interfaces/movies-interface";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})




export class MovieTMDBService {
  private http = inject(HttpClient);
  private urlRoot: string = "https://api.themoviedb.org/3/discover/movie?";
  private api_key: string = "f891bdca8817d8d4ec59d41bf5682716";
  private img: string = "https://image.tmdb.org/t/p/original/";
  private arrayFullMovies: Result[] = [];
  private arrayFillterMovies: Result[] = [];
  index: number = 0;

  peticionApiMovies(indexPage: number): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.urlRoot}api_key=${this.api_key}&page=${indexPage}&sort_by=popularity.desc`)
  }
  // peticionApiMoviesPopular(indexPage: number): Observable<IMovies> {
  //   return this.http.get<IMovies>(`https://api.themoviedb.org/3/movie/popular?api_key=f891bdca8817d8d4ec59d41bf5682716&page=${indexPage}`)
  // }
  // llenarArrayFull(): void {
  //   for (let i = 1; i < 500; i++) {
  //     this.peticionApiMovies(i).
  //       subscribe(objctMovies => {
  //         objctMovies.results.flatMap((movie) => {
  //           movie.poster_path = `${this.img}${movie.poster_path}`;
  //           this.arrayFullMovies.push(movie);
  //         })
  //       })
  //   }

  // }
  getArrayMovies(): Result[] {
    return this.arrayFullMovies;
  }

  llenarArrayFilter(): void {
    this.arrayFillterMovies = [];
    let release_date;
    let year = new Date();
    for (let i:number = 1; i < 500; i++) {
      this.peticionApiMovies(i).
        subscribe(objctMovies => {
          objctMovies.results.flatMap((movie) => {
            movie.poster_path = `${this.img}${movie.poster_path}`;
            release_date = new Date(movie.release_date);
            if (release_date.getFullYear()===year.getFullYear() && movie.popularity>200) {
              this.arrayFillterMovies.push(movie)
              console.log(movie.popularity)
            }
          })
        })
    }

  }

  getArrayMoviesFilter(): Result[] {
    return this.arrayFillterMovies;
  }

  getDataMoviesYear(): Result[] {
    let release_date;
    let year = new Date();
    this.arrayFillterMovies = [];
    for (let i: number = 1; i < this.arrayFullMovies.length; i++) {
      release_date = new Date(this.arrayFullMovies[i].release_date);
      if (release_date.getFullYear() == year.getFullYear() && this.arrayFullMovies[i].vote_average > 4000) {
        this.arrayFillterMovies.push(this.arrayFullMovies[i])
        console.log(this.arrayFullMovies[i].original_title + "" + this.arrayFullMovies[i].vote_average)
      }

    }

    return this.arrayFillterMovies;

  }



}