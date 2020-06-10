import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableList } from 'src/app/core/table/table-list/table-list.interface';

@Component({
  selector: 'app-read',
  template: '<table [table-list]="tableItens" cellspacing="0" width="100%"></table>',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tableItens: TableList[];

  constructor(private http: HttpClient) {
    this.http.get<TableList[]>("http://localhost:3000/tableItens")
                              .subscribe(response => this.getTableItens(response));
   }

  ngOnInit(): void {
    
  }

  private getTableItens(value): void{
    this.tableItens = value;
    console.log(value)
  }

};


