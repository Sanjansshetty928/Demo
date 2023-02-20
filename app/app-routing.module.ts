import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaticComponent } from './static/static.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
