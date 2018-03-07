import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players : any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    //getting a list of player data from RESTful API
     this.http.get('/player').subscribe(data => {
     this.players = data;
  });
  }

}
