import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardMoviesComponent } from '../../components/card-movies/card-movies.component';
import { MovieTMDBService } from '../../Services/tmdb-api.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardMoviesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private appSV: MovieTMDBService){
    //this.appSV.llenarArrayFull();
    this.appSV.llenarArrayFilter();
  }



}
