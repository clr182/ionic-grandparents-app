import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.page.html',
  styleUrls: ['./interests.page.scss'],
})
export class InterestsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }


  submitInterests(){
    this.router.navigateByUrl('/preferences-noted');
  }
}
