import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  toggleDarkTheme(shouldEnable) {
    document.body.classList.toggle('dark', shouldEnable);
  }
  
}
