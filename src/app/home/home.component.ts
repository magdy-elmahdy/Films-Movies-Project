import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any;
  trendingTv:any;
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  term:string;

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movie').subscribe( (data)=>{
      this.trendingMovies = data.results.slice(0,10);
    });

    _MoviesService.getTrending('tv').subscribe( (data)=>{
      this.trendingTv = data.results.slice(0,10);
    });

   }

  ngOnInit(): void {
  }
}
