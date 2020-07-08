import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailsComponent} from './dictionary-details/dictionary-details.component';


const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component:  DictionaryDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
