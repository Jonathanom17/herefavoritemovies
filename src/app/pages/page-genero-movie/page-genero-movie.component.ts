import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CardMoviesComponent } from '../../components/card-movies/card-movies.component';

@Component({
  selector: 'app-page-genero-movie',
  standalone: true,
  imports: [RouterLink,MatButtonModule, MatMenuModule, CardMoviesComponent],
  templateUrl: './page-genero-movie.component.html',
  styleUrl: './page-genero-movie.component.css'
})
export class PageGeneroMovieComponent  {
  filterArray:string="28";

  getFiltroGenero(filtrar:string){
    this.filterArray=filtrar;
  }


}
