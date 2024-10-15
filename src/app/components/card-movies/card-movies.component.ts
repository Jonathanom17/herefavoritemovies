import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { Result } from '../../interfaces/movies-interface';
import { MovieTMDBService } from '../../Services/tmdb-api.component';

@Component({
  selector: 'component-card-movies',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
    
  ],
  templateUrl: './card-movies.component.html',
  styleUrl: './card-movies.component.css'
})
export class CardMoviesComponent  {
   arrayMovies:Result[]=[];

  constructor(private appService:MovieTMDBService){
    
  }


  getDataMovies(): Result[]{
    return this.appService.getArrayMoviesFilter();
     
  }
  
}
