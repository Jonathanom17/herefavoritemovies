import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieTMDBService } from './Services/tmdb-api.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 constructor(private appSV:MovieTMDBService){
  this.appSV.llenarArrayMovies();
    this.appSV.orderArrayByVote();
    
 }
  
  
  
  title = 'HereFavoriteMovies';
}
