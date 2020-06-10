import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  styleUrls: ['./menu.item.component.scss'],
  template: `<li class="">
              <a>
                  <i class="{{sub.icon}}" aria-hidden="true"></i>
                  <span class="title">{{sub.main}}</span>
              </a>
            </li>`
})
export class MenuItemComponent implements OnInit {

  @Input() sub;
  
  constructor() { }

  ngOnInit(): void {
  }

}
