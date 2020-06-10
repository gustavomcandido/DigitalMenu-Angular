import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './admin/main-content/shared/read/read.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', component: ReadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
