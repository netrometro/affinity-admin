import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  admin: boolean = false;
  done: boolean = true;

  constructor() { }

  ngOnInit() {
    this.done = true;
    this.admin = false;
  }


}