import { Injectable } from '@angular/core';
import { CommonBtnClass, CommonBtnType } from '../models/auth/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

   createButtonConfig(config: CommonBtnType): CommonBtnClass {
    const defaultConfig = new CommonBtnClass();
    return Object.assign(defaultConfig, config);
  }
}
