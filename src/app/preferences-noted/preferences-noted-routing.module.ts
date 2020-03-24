import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferencesNotedPage } from './preferences-noted.page';

const routes: Routes = [
  {
    path: '',
    component: PreferencesNotedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesNotedPageRoutingModule {}
