import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiUrl="https://api.themoviedb.org/3"
  apiKey="?api_key=dcbaf8967cebe041eebe54ae49ee250b"

  constructor(private http: HttpClient) { }

  getTrending(){
    return this.http.get(`${this.apiUrl}/trending/all/week${this.apiKey}`);
    
  }
  getTrendingDay(){
    return this.http.get(`${this.apiUrl}/trending/all/day${this.apiKey}`);
  }
  getTopRated(){
    return this.http.get(`${this.apiUrl}/movie/top_rated${this.apiKey}&language=fr-FR&page=1`)
  }
}
