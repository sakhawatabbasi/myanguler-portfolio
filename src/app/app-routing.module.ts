import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { HeaderComponent } from './includes/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillComponent } from './pages/skill/skill.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
   },
   {
    path:'home',component:HomeComponent
   },
 {
  path:'about',component:AboutComponent
 },
 {
  path:'services',component:ServicesComponent
 },
 {
  path:'skill',component:SkillComponent
 },
 {
  path:'quality',component:QualityComponent
 },
 {
  path:'contact',component:ContactComponent
 },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
