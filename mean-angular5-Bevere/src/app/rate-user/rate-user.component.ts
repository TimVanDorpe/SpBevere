import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rate-user',
  templateUrl: './rate-user.component.html',
  styleUrls: ['./rate-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RateUserComponent implements OnInit {

  player:any = {};
  rating = 0;
  beoordeling = 0;
  totalerating = 0;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayer(this.route.snapshot.params['id']);
  }

  getPlayer(id) {
    this.http.get('/player/'+id).subscribe(data => {
      this.player = data;
      this.rating = this.player.rating;
      this.beoordeling = this.player.countRatings;
                
    });
  }

  updatePlayer(id) {
    console.log("qq player/rating : " + this.player.rating);
    console.log("qq gem rating vooraf :  " + this.rating);
    console.log("qq beoordeling" + this.beoordeling);
    this.totalerating =  this.rating * this.beoordeling;
    console.log("qq Rating totaal x * y : " + this.totalerating);

    
    this.player.countRatings = this.beoordeling + 1;

    console.log("player rating : " + this.player.rating)
    console.log("qq Countingrates + 1 : " + this.player.countRatings);
    //totale aantal punten + de nieuwe score            
    this.player.rating = Number(this.totalerating) + Number(this.player.rating);
    //en dan delen door het totaal aantal beoordelingen..    

    console.log("qq Rating + totale rating " + this.player.rating);
    this.player.rating = this.player.rating/this.player.countRatings; 
    
    console.log("qq rating/beorrdeling " + this.player.rating);   
    this.player.rating = Number(this.player.rating).toFixed(2); 
    console.log("qq rating after kommafix : " + this.player.rating);   

    this.http.put('/player/'+id, this.player)
      .subscribe(res => {        
          let id = res['_id'];      
          this.router.navigate(['/players']);
        }, (err) => {
          console.log(err); 
        }
      );
  }

}