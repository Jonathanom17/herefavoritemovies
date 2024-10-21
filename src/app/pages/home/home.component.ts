import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardMoviesComponent } from '../../components/card-movies/card-movies.component';
import { MovieTMDBService } from '../../Services/tmdb-api.component';
import { Result } from '../../interfaces/movies-interface';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { LoandingComponent } from "../../components/loanding/loanding.component";
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardMoviesComponent, NgOptimizedImage, NgStyle, LoandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  filterArray:string="filterYear";
  arrayMovies:Result[]=[];
  isLoanding:boolean=true;
   counter = timer(0,5000);
  constructor(private appSV: MovieTMDBService){
    
  }
  ngOnInit(): void {
      
    
  }

  getDataMovies(): Result[]{
   

    return this.appSV.getArrayMoviesExtrenos();
}


}
