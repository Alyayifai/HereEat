import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MulaiPage } from './mulai.page';

describe('MulaiPage', () => {
  let component: MulaiPage;
  let fixture: ComponentFixture<MulaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MulaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
