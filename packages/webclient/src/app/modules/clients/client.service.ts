import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ClientService {
  constructor(private readonly http: HttpClient) {}

  public getClients(filters = {}) {
    return this.http.get<any>("/api/clients", { params: filters });
  }

  public getClientById(id: number) {
    return this.http.get<any>(`/api/clients/${id}`);
  }

  public createClient(clientInfo) {
    return this.http.post<any>(`/api/clients/create`, clientInfo);
  }
  public getBrands(filters = {}) {
    return this.http.get<any>("/api/clients/brands");
  }
  public buildClient(){
    return this.http.get<any>("/api/clients/new");
  }
}
