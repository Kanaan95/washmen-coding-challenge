import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Partners } from '../shared/models/Partner';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(url: string): Observable<Array<Partners>> {
    return this._httpClient.get<Array<Partners>>(environment.rootApi + '/partners')
  }
}
