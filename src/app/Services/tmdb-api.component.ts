import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import {  IMovies, Result } from "../interfaces/movies-interface";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})




export class MovieTMDBService {





  private http= inject(HttpClient);
  private urlRoot:string= "https://api.themoviedb.org/3/discover/movie?";
  private api_key:string="f891bdca8817d8d4ec59d41bf5682716";
  private img:string= "https://image.tmdb.org/t/p/original/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg";


  peticionApiMovies(indexPage:number):Observable<IMovies>{
    return  this.http.get<IMovies>(`${this.urlRoot}api_key=${this.api_key}&page=${indexPage}&sort_by=popularity.desc`)
  }
  arrayMovies:Result[]=[];
  index:number=0;
  llenarArray():void{
      for(let i=1;i<500;i++){
       this.peticionApiMovies(i).
       subscribe(objctMovies=>{ 
            objctMovies.results.flatMap((movie)=>{
                 this.arrayMovies.push(movie);
                 console.log(movie.id)
            })
       }) 
     }
  }





}