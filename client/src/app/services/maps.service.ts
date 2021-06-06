import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  focusedMarker = new BehaviorSubject<any>(null)

  radiusBehavior = new BehaviorSubject<number>(0)

  constructor() { }

}
