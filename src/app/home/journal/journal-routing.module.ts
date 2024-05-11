import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalPage } from './journal.page';

const routes: Routes = [
  {
    path: '',
    component: JournalPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalPageRoutingModule {}
