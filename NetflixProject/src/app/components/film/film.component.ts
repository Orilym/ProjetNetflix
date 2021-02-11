import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {

  slideConfig = {"slidesToShow": 8, "slidesToScroll": 8};
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

 films
   constructor(private filmService: FilmService) { }

   ngOnInit(): void {
     this.filmService.getTrending().subscribe(data => this.films = data);
  
    
  }

}
