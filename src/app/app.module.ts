import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './binding/binding.component';
import { BuyComponent } from './buy/buy.component';
import { StayComponent } from './stay/stay.component';
import { FarmComponent } from './farm/farm.component';
import { CollegeComponent } from './college/college.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    BindingComponent,
    BuyComponent,
    StayComponent,
    FarmComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
