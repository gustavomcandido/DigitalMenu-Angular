import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu.ItemComponent } from './menu.item.component';

describe('Menu.ItemComponent', () => {
  let component: Menu.ItemComponent;
  let fixture: ComponentFixture<Menu.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
