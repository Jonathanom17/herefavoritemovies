import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CardMoviesComponent } from '../../components/card-movies/card-movies.component';
import {MatCardModule} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MovieTMDBService } from '../../Services/tmdb-api.component';
import { Result } from '../../interfaces/movies-interface';
import { ListaGenero } from '../../interfaces/list-Genero';
import { LoandingComponent } from "../../components/loanding/loanding.component";
@Component({
  selector: 'app-page-genero-movie',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    CardMoviesComponent,
    MatCardModule,
    MatIconModule,
    LoandingComponent
],
  templateUrl: './page-genero-movie.component.html',
  styleUrl: './page-genero-movie.component.css'
})
export class PageGeneroMovieComponent  {
  filterArray:string="action";
  arrayMovies:Result[]=[];
  action:number=28;
  comedy:number=35;
  animation:number=16;
  Documentary:number=99;
  horror:number=27;
  constructor(private appService:MovieTMDBService){
    this.arrayMovies= this.appService.llenarArrayFilterGenero(28,35,16)
    
  }
  
  getFiltroGenero(filter:string):void{
    this.arrayMovies=[];
      if(filter==="action"){
        this.arrayMovies= this.appService.llenarArrayFilterGenero(this.action,this.comedy,this.animation)
        
      }else if(filter==="Animation"){
        this.arrayMovies= this.appService.llenarArrayFilterGenero(this.animation,this.Documentary,this.action)
        
      }else if(filter==="Horror"){
        this.arrayMovies=  this.appService.llenarArrayFilterGenero(this.horror,this.animation,this.comedy)
       
      }else if(filter==="Comedy"){
        this.arrayMovies=  this.appService.llenarArrayFilterGenero(this.comedy,this.action,this.horror)
       
      }
  }

  getArrayFilter():Result[]{
    return this.arrayMovies;
  }

}
