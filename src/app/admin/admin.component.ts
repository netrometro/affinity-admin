import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from './admin.service';
import { AuthService } from '.././auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  senha: string;

  constructor(
    private adminService: AdminService,
    private authService: AuthService) {

  }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.log(this.senha);

    if (this.senha == '1') {
      this.authService.admin = true;
       //this.router.navigate(['/identify']);
    }
  }
}