import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AlertModule } from "ngx-bootstrap/alert";

import { ClientsRoutingModule } from "./clients-routing.module";
import { ClientFormComponent } from "./client-form/client-form.component";
import { ClientListComponent } from "./client-list/client-list.component";
//import { ClientShowComponent } from "./client-show/client-show.component";

@NgModule({
  declarations: [ClientListComponent, ClientFormComponent],
  imports: [CommonModule, FormsModule, AlertModule, ClientsRoutingModule],
})
export class ClientsModule {}
