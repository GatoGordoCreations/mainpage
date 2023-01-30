import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'portfolio', 
    component: PortfolioComponent
  },
  {
    path: 'skills', 
    component: SkillsComponent
  },
  {
    path: 'certifications', 
    component: CertificationsComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: 'cv', 
    component: CvComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
