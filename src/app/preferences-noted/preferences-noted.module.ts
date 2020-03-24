import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencesNotedPageRoutingModule } from './preferences-noted-routing.module';

import { PreferencesNotedPage } from './preferences-noted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencesNotedPageRoutingModule
  ],
  declarations: [PreferencesNotedPage]
})
export class PreferencesNotedPageModule {}
