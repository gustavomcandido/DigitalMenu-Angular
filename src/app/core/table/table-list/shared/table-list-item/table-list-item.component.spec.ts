import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListItemComponent } from './table-list-item.component';

describe('TableListItemComponent', () => {
  let component: TableListItemComponent;
  let fixture: ComponentFixture<TableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
