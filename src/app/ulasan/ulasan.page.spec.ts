import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UlasanPage } from './ulasan.page';

describe('UlasanPage', () => {
  let component: UlasanPage;
  let fixture: ComponentFixture<UlasanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlasanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UlasanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
