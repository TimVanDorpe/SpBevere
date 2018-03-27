import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerDetailComponent implements OnInit {

  player = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPlayerDetail(this.route.snapshot.params['id']);
  }

  getPlayerDetail(id) {
    this.http.get('/player/'+id).subscribe(data => {
      this.player = data;
    });
  }
  deletePlayer(id) {
  this.http.delete('/player/'+id)
    .subscribe(res => {
        this.router.navigate(['/players']);
      }, (err) => {
        console.log(err);
      }
    );
}
}