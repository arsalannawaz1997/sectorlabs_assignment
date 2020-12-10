import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
})
export class ClientListComponent implements OnInit {
  public clients = [];
  public isLoading = true;
  public isError = false;

  constructor(private readonly clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = [];
    this.isLoading = true;
    this.isError = false;
    this.clientService.getClients({}).subscribe(
      (clients) => {
        this.clients = clients;
        this.isLoading = false;
        this.isError = false;
        console.log(this.clients);
      },
      () => {
        this.clients = [];
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  // public getBadgeClass(client) {
  //   switch (client.type) {
  //     case "cleaning":
  //       return { "badge-secondary": true };
  //     case "kitchen":
  //       return { "badge-success": true };
  //     default:
  //       return { "badge-primary": true };
  //   }
  // }
}
