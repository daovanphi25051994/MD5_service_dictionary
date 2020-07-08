import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailsComponent } from './dictionary-details/dictionary-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
