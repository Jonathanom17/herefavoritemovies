import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieTMDBService } from './Services/tmdb-api.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(private apiMovie: MovieTMDBService){

  }
  ngOnInit(): void {
    this.apiMovie.llenarArray();
  }
  title = 'herefavoritemovies';
}
