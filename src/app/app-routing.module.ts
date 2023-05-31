import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/productSection/products.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/page404/not-found.component';
import { ProductDetailsComponent } from './Components/productDetails/product-details.component';
import { DashboardComponent } from './Components/admin/Dashboard/dashboard.component';
import { CUFormComponent } from './Components/admin/Form/cuform.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"admin_dashboard", component:DashboardComponent},
  {path:"products/:id/edit", component:CUFormComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
