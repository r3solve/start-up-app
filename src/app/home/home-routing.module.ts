import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
            path: 'explore',
            loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
          },
          {
            path: 'session',
            loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
          },
          {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'journal',
            loadChildren: () => import('./journal/journal.module').then( m => m.JournalPageModule)
          }
      ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
