import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HomeComponent } from './pages/home/home.component';
import { MartialArtsComponent } from './pages/hobbies/martial-arts/martial-arts.component';
import { MusicComponent } from './pages/hobbies/music/music.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'hobbies/music', component: MusicComponent },
  { path: 'hobbies/martialarts', component: MartialArtsComponent },
  { path: 'about', component: AboutComponent },
  { path: '*', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
