import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { MartialArtsComponent } from './hobbies/martial-arts/martial-arts.component';
import { MusicComponent } from './hobbies/music/music.component';
import { NgModule } from '@angular/core';
import { PageTemplateComponent } from './page-template/page-template.component';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AboutComponent,
    HobbiesComponent,
    HomeComponent,
    ProjectsComponent,
    PageTemplateComponent,
    MusicComponent,
    MartialArtsComponent,
  ],
  imports: [CommonModule, TranslateModule, ComponentsModule],
  exports: [
    AboutComponent,
    HobbiesComponent,
    HomeComponent,
    ProjectsComponent,
    MusicComponent,
    MartialArtsComponent,
  ],
})
export class PagesModule {}
