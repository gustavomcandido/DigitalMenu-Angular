import { Component, OnInit, Input, ElementRef } from '@angular/core';


@Component({
  selector: '[table-list]',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input('table-list') tableItens;
  
  constructor(private el: ElementRef) { 
    el.nativeElement.style.border = "1px solid #eee";
    el.nativeElement.style.width = "100%";
    el.nativeElement.style.marginBottom = "18px";
    el.nativeElement.style.backgroundColor = "transparent";
    el.nativeElement.style.borderCollapse = "collapse";
    el.nativeElement.style.borderSpacing = "0";
    el.nativeElement.style.overflowX = "scroll";
  }

  ngOnInit(): void {
      
    
  }

}
