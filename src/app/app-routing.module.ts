import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule),
  },
  {
    path: 'ticket',
    loadChildren: () =>
      import('./ticket/ticket.module').then(m => m.TicketModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
