import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailsComponent} from './dictionary-details/dictionary-details.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component:  DictionaryDetailsComponent,
        canActivate: [AuthGuard]
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
