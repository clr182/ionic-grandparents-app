import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreferencesNotedPage } from './preferences-noted.page';

describe('PreferencesNotedPage', () => {
  let component: PreferencesNotedPage;
  let fixture: ComponentFixture<PreferencesNotedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesNotedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferencesNotedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
