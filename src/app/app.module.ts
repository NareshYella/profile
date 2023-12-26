import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EducationComponent} from "./components/education/education.component";
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {LoginComponent} from './components/admin/login/login.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
