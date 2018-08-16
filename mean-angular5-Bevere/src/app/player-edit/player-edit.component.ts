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
  rating = 0;
  beoordeling = 0;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayer(this.route.snapshot.params['id']);
    console.log("This is some fking bullshit");
    
  }

  getPlayer(id) {
    this.http.get('/player/'+id).subscribe(data => {
      this.player = data;
      this.rating = this.player.rating;
      this.beoordeling = this.player.countRatings;
                
    });
  }

  updatePlayer(id) {   
    console.log("rating count before : " + this.player.countRatings)     
    this.player.countRatings = this.beoordeling + 1;
     console.log("rating count after : " + this.player.countRatings)
     console.log("rating before : " + this.rating)
     console.log("rating before : " + this.player.rating)           
    this.player.rating = Number(this.rating) + Number(this.player.rating);
     console.log("rating after sum ++ : " + this.player.rating)  
    this.player.rating = this.player.rating / this.player.countRatings;  
    console.log("rating after / : " + this.player.rating)  
    console.log("count after /: " +this.player.countRatings)  
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