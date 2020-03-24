import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences-noted',
  templateUrl: './preferences-noted.page.html',
  styleUrls: ['./preferences-noted.page.scss'],
})
export class PreferencesNotedPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signInWithGoogle(){
    this.router.navigateByUrl('/welcome');
  }

}
