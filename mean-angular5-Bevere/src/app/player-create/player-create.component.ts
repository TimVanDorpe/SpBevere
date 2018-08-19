import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerCreateComponent implements OnInit {

  player = {};

  constructor(private http: HttpClient, private router: Router, public auth: AuthenticationService) { }

  ngOnInit() {
    
  }

  savePlayer() {
    
    this.http.post('/player', this.player)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/player-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}