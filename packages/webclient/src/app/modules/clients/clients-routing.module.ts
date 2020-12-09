import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientFormComponent } from "./client-form/client-form.component";
import { ClientListComponent } from "./client-list/client-list.component";
//import { ClientShowComponent } from "./client-show/client-show.component";

const routes: Routes = [
  {
    path: "",
    component: ClientListComponent,
  },
  {
    path: "form",
    component: ClientFormComponent,
  },
  // {
  //   path: ":id",
  //   pathMatch: "full",
  //   component: ClientShowComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
