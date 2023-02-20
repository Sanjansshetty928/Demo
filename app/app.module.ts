import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaticComponent } from './static/static.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { HttpParams,HttpClient } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomepageComponent,
    LoginComponent,
    SignInComponent,
    StaticComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    

  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
