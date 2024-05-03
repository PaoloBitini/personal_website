import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BubblesModule } from './bubbles/bubbles.module';
import { ComponentsModule } from './components/components.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { PagesModule } from './pages/pages.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    BubblesModule,
    DragDropModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
