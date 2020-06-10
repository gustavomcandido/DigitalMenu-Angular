import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { MenuComponent } from './admin/shared/menu/menu.component';
import { MenuItemComponent } from './admin/shared/menu.item/menu.item.component';
import { MainContentComponent } from './admin/main-content/main-content.component';
import { TableListComponent } from './core/table/table-list/table-list.component';
import { TableListItemComponent } from './core/table/table-list/shared/table-list-item/table-list-item.component';
import { ReadComponent } from './admin/main-content/shared/read/read.component';
import { CreateComponent } from './admin/main-content/shared/create/create.component';
import { UpdateComponent } from './admin/main-content/shared/update/update.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    MainContentComponent,
    TableListComponent,
    TableListItemComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
