import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  
  template: `<li class="has-sub" [ngClass]="{'open': open}">
              <a (click)="openMenu()" >
                  <i class="{{item.icon}}" aria-hidden="true"></i>
                  <span class="title">{{item.main}}</span>
              </a>
              <ul [ngClass]="{'accordion': !open}">
                  <app-menu-item *ngFor="let sub of item.subItem" [sub]="sub"></app-menu-item>                 
              </ul>
            </li>`
})
export class MenuComponent implements OnInit {

  @Input() item;
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.open = !this.open;
  }

}
