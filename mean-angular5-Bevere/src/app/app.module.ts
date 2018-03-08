import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
//default page set players
const appRoutes: Routes = [
  {
    path: 'players',
    component: PlayerComponent,
    data: { title: 'Player List' }
  },
  {
    path: 'player-detail/:id',
    component: PlayerDetailComponent,
    data: { title: 'Player Details' }
  },
   {
    path: 'player-create',
    component: PlayerCreateComponent,
    data: { title: 'Create Player' }
  },
  {
    path : 'player-edit',
    component: PlayerEditComponent,
    data: {title : 'Edit Player'}
  },
  { path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailComponent,
    PlayerCreateComponent,
    PlayerEditComponent
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
