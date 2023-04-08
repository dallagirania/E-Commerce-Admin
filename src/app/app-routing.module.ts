import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
 
  {path:'header',component:HeaderComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path:'listProd',component:ListProductComponent},
  {path:'addProd',component:AddProductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }