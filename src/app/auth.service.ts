import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  done: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.done = true;
  }
}