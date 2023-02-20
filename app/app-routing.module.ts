import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaticComponent } from './static/static.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent,
  },
  {
    path:'',component:FooterComponent,
  },
  {
    path:'login',component:LoginComponent,

  },
  {
    path:'SignIn',component:SignInComponent
  },
  {
    path:'Static',component:StaticComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'admin',component:AdminComponent
  },{
    path:'forbidden',component:ForbiddenComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
