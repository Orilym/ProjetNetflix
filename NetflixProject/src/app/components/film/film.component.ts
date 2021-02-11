import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {

films
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getTrending().subscribe(data => this.films = data);
  
    
  }

}
