import { Component, OnInit } from '@angular/core';
import { CalenderPage} from '../calender/calender.page';
import { AlertsPage} from '../alerts/alerts.page';
import { SearchPage} from '../search/search.page';
import { LivePage} from '../live/live.page';
import { AccountPage} from '../account/account.page';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{
  calenderPage = CalenderPage;
  alertPage = AlertsPage;
  searchPage = SearchPage;
  livePage = LivePage;
  accountPage = AccountPage;
  constructor
  (){ }


}