import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { DatailsComponent } from './datails/datails.component';
import { TvComponent } from './tv/tv.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WatchsPipe } from './watchs.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    MoviesComponent,
    DatailsComponent,
    TvComponent,
    MoviesDetailsComponent,
    PeopleComponent,
    NetworkComponent,
    NotfoundComponent,
    WatchsPipe,
    SeemorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
