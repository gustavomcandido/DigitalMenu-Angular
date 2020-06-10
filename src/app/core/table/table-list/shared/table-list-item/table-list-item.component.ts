import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-list-item',
  templateUrl: './table-list-item.component.html',
  styleUrls: ['./table-list-item.component.scss']
})
export class TableListItemComponent implements OnInit {
  
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
