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



  llenarArrayMovies(): void {
   
    for (let i: number = 1; i < 500; i++) {
      this.peticionApiMovies(i).
        subscribe(objctMovies => {
          objctMovies.results.flatMap((movie) => {
            movie.poster_path = `${this.img}${movie.poster_path}`;
            movie.release_date = new Date(movie.release_date);
            this.arrayFullMovies.push(movie);
            
          })
        })
    }
  }
  getArrayMovies(): Result[] {
    
    return this.arrayFullMovies;
  }


  llenarArrayFilterYear(): void {
    this.arrayFillterMovies = [];
    let year = new Date();
    for (let i: number = 1; i < this.arrayFullMovies.length; i++) {
      if (this.arrayFullMovies[i].release_date.getFullYear() === year.getFullYear() && this.arrayFullMovies[i].popularity > 150) {
        this.arrayFillterMovies.push(this.arrayFullMovies[i])
        
      }
    }
  }
contador=0;
  getArrayMoviesFilter(): Result[] {

    return this.arrayFillterMovies;
    
  }


  llenarArrayFilterGenero(idGenero: number): void {
    this.arrayFillterMovies = [];
    for (let i: number = 1; i < this.arrayFullMovies.length; i++) {
      for(let j: number = 1; j < this.arrayFullMovies[i].genre_ids.length; j++){
        
        if (this.arrayFullMovies[i].genre_ids[j]===idGenero) {
          console.log(this.arrayFullMovies[i].genre_ids)
          console.log(this.arrayFullMovies[i].genre_ids[j])
            this.arrayFillterMovies.push(this.arrayFullMovies[i])
            
        }
      }
    }
  }

  getArrayMoviesGenero(): Result[] {
    
    return this.arrayFillterMovies;
  }



}