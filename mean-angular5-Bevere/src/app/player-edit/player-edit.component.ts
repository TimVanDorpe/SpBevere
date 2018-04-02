import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerEditComponent implements OnInit {

  player:any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayer(this.route.snapshot.params['id']);
  }

  getPlayer(id) {
    this.http.get('/player/'+id).subscribe(data => {
      this.player = data;
    });
  }

  updatePlayer(id) {
    this.http.put('/player/'+id, this.player)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/player-detail', id]);
        }, (err) => {
          console.log(err); 
        }
      );
  }

}