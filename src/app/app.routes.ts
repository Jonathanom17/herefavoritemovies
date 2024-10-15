import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageGeneroMovieComponent } from './pages/page-genero-movie/page-genero-movie.component';


export const routes: Routes = [

        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'genero', component: PageGeneroMovieComponent },
        
        {path: '**', redirectTo: ''},

];
