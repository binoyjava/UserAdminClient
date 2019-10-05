import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { AddUpdateUserComponent } from 'src/app/add-update-user/add-update-user.component';


const routes: Routes = [ {path: '', component: UserListComponent},
                         {path: 'addUpdate', component: AddUpdateUserComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
