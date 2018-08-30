import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
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
    $('li').click(function(){
      $('li').removeClass('active');
      $('li').removeClass('sec-active');
      $(this).addClass('active'); 
      $(this).prevAll().addClass('sec-active');
 })
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