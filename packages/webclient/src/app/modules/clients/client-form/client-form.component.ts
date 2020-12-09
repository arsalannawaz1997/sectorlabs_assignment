import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "../client.service";
import { flatMap } from "rxjs/operators";

@Component({
  selector: "app-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.scss"],
})
export class ClientFormComponent implements OnInit {
  public alerts = [];
  public brands;
  public client;

  constructor(
    private readonly clientService: ClientService,
    private readonly route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(flatMap((params) => this.clientService.getBrands(params)))
      .subscribe(
        (brands) => {
          this.brands = brands;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  public onFormSubmit() {
    this.alerts = [];

    this.clientService.createClient(this.client).subscribe(
      (client) => {
        this.client = client;
        this.alerts.push({ type: "success", message: "The client was successfully created." });
      },
      (error) => {
        console.error(error);

        this.alerts.push({
          type: "danger",
          message: "There was an error while creating the client.",
        });
      }
    );
  }
}
