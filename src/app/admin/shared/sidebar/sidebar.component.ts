import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [ 
  {
    icon: "fa fa-cog", //engrenagem
    main: "Dashboard",
    subItem: [
    {
      icon: "fa fa-cog", //engrenagem
      main: "Dash1"
    },
    {
      icon: "fa fa-cog", //engrenagem
      main: "Dash2"
    }
  ]
  },
  {
    icon: "fa fa-desktop", //monitor
    main: "Pedido",
    subItem: 
    [{
      icon: "fa fa-desktop", //monitor
      main: "Ped1"
    },
    {
      icon: "fa fa-desktop", //monitor
      main: "Ped2"
    }]
  }]
  constructor() { }

  ngOnInit(): void {
  }

  
}
