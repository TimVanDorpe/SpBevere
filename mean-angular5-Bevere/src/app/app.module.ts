import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
//default page set players
const appRoutes: Routes = [
  {
    path: 'players',
    component: PlayerComponent,
    data: { title: 'Player List' }
  },
  { path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
