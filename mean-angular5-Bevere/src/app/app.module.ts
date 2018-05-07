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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthenticationService } from './authentication.service';

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
    path : 'player-edit/:id',
    component: PlayerEditComponent,
    data: {title : 'Edit Player'}
  },
  { path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
  ,{ path: "home", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailComponent,
    PlayerCreateComponent,
    PlayerEditComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
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
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
