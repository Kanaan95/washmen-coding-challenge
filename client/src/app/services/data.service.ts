import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(url: string) {
    return this._httpClient.get(environment.rootApi + '/partners').subscribe(
      res => console.log(res)
    )
  }
}
