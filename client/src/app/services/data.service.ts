import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { AppError } from '../errors/app-error';
import { BadRequest } from '../errors/bad-request';
import { NotFoundError } from '../errors/not-found-error';
import { Partners } from '../shared/models/Partner';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * GET request - Returns all partners
   * @param url 
   * @returns 
   */
  getAll(url: string): Observable<Array<Partners>> {
    return this._httpClient.get<Array<Partners>>(environment.rootApi + '/partners')
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  getSome(url: string, distance: number, units: string = 'km'): Observable<Array<Partners>> {
    let params = new HttpParams().set('distance', distance).set('units', units)
    return this._httpClient.get<Array<Partners>>(environment.rootApi + url, { params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }


  private handleError(error: HttpErrorResponse) {

    if (error.status === 404) {
      return throwError(new NotFoundError())
    }

    if (error.status === 400) {
      return throwError(new BadRequest())
    }

    return throwError(new AppError(error))
  }
}
