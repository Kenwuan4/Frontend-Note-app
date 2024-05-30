import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateListService {
  private updateListService = new Subject<void>();
  updateListService$ = this.updateListService.asObservable();

  constructor() { }

  notifyUpdateUserList():void{
    this.updateListService.next();
  }
}
