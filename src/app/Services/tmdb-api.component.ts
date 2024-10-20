
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
  private arrayFillterEstreno: Result[] = [];
  private arrayFillteGenero: Result[] = [];
 
  index: number = 0;

    constructor(){
     
    }
  peticionApiMovies(indexPage: number): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.urlRoot}api_key=${this.api_key}&page=${indexPage}&sort_by=popularity.desc`)
  }



   llenarArrayMovies(): void {
    
    if (this.arrayFullMovies.length === 0) {
      for (let i: number = 1; i < 300; i++) {
        this.peticionApiMovies(i).
          subscribe(objctMovies => {
            objctMovies.results.flatMap((movie) => {
              movie.poster_path = `${this.img}${movie.poster_path}`;
              movie.backdrop_path = `${this.img}${movie.backdrop_path}`;
              movie.release_date = new Date(movie.release_date);
              this.arrayFullMovies.push(movie);

            })
          })
          
          
      }
      
      
      
    } else {
      
    }
  }

   

  orderArrayByVote() {
    
    this.arrayFullMovies.sort((a, b) => a.vote_average - b.vote_average)
     
  }
 
  
  
  getArrayMoviesExtrenos(): Result[] {
    this.arrayFillterEstreno = [];
    
   
    if (this.arrayFillterEstreno.length=== 0) {     
      
      let year = new Date();
      for (let i: number = 1; i < this.arrayFullMovies.length; i++) {

        if (this.arrayFullMovies[i].release_date.getFullYear() === year.getFullYear() &&
          this.arrayFullMovies[i].popularity > 150 &&
          !this.arrayFillterEstreno.includes(this.arrayFullMovies[i])) {
          this.arrayFillterEstreno.push(this.arrayFullMovies[i])

        }
      }
     
    }
    return this.arrayFillterEstreno;
  }

  

  


 


  llenarArrayFilterGenero(idGenero: number, blockGenero: number, blockGenero2: number): Result[] {
    this.arrayFillteGenero = [];
    for (let i: number = 1; i < this.arrayFullMovies.length; i++) {
      for (let j: number = 1; j < this.arrayFullMovies[i].genre_ids.length; j++) {

        if (this.arrayFullMovies[i].genre_ids[j] === idGenero &&
          !this.arrayFullMovies[i].genre_ids.includes(blockGenero) &&
          !this.arrayFullMovies[i].genre_ids.includes(blockGenero2)&&
          this.arrayFullMovies[i].release_date.getFullYear()>2000) {

          this.arrayFillteGenero.push(this.arrayFullMovies[i])

        }
      }
    }
    return this.arrayFillteGenero;
  }



}