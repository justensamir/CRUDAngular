import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/Card/card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ArrivalComponent } from './Components/newArrival/arrival.component';
import { NewCardComponent } from './Components/newProduct/new-card.component';
import { ProductsComponent } from './Components/productSection/products.component';
import { TitleComponent } from './Components/sectionTitle/title.component';
import { StartComponent } from './Components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/page404/not-found.component';
import { ProductDetailsComponent } from './Components/productDetails/product-details.component';
import { DashboardComponent } from './Components/admin/Dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {CUFormComponent} from './Components/admin/Form/cuform.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ArrivalComponent,
    NewCardComponent,
    ProductsComponent,
    TitleComponent,
    StartComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    DashboardComponent,
    CUFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
