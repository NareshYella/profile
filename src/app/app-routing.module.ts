import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {EducationComponent} from "./components/education/education.component";
import {LoginComponent} from "./components/admin/login/login.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'education', component: EducationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
