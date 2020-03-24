import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CalenderPageModule } from '../calender/calender.module';
import { AlertsPageModule } from '../alerts/alerts.module';
import { LivePageModule } from '../live/live.module';
import { SearchPageModule } from '../search/search.module';
import { AccountPageModule } from '../account/account.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SuperTabsModule,
    CalenderPageModule,
    AlertsPageModule,
    LivePageModule,
    SearchPageModule,
    AccountPageModule
  ],
  declarations: [MainPage],
  entryComponents: [MainPage]
})
export class MainPageModule {}
