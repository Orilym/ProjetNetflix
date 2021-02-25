import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
// premier carousel
  slideConfig = {"slidesToShow": 7, "slidesToScroll": 1, arrows: false, dots: true, centerMode: true, focusOnSelect: true, asNavFor: '.slider-for', autoplay: true, autoplaySpeed: 2000,};
  slideConfig2 = {slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.slider-nav'};
// deuxieme carousel
  slideConfig3 = {"slidesToShow": 7, "slidesToScroll": 1, arrows: false, dots: true, centerMode: true, focusOnSelect: true, asNavFor: '.slider-for3'};
  slideConfig4 = {slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.slider-nav4'};
// troisieme carousel
slideConfig5 = {"slidesToShow": 7, "slidesToScroll": 1, arrows: false, dots: true, centerMode: true, focusOnSelect: true, asNavFor: '.slider-for5'};
slideConfig6 = {slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.slider-nav6'};

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

  trending
  trendingDay
  topRated
   constructor(private filmService: FilmService) { }

   ngOnInit(): void {
     this.filmService.getTrending().subscribe(data => this.trending = data);
     this.filmService.getTrendingDay().subscribe(data => this.trendingDay = data);
     this.filmService.getTopRated().subscribe(data => this.topRated = data); 
    
  }

}
