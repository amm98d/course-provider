import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

  constructor() { }

}
