import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '.././environments/environment';

import { AppRoutingModule } from './app.routing.module';
import { QuestionaryModule } from './questionary/questionary.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { EndingComponent } from './ending/ending.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

import { AuthService } from './auth.service';
import { IdentifyService } from './identify/identify.service';
import { AdminService } from './admin/admin.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,     
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    QuestionaryModule,
    AdminModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    IdentifyComponent, 
    TutorialComponent, 
    EndingComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    AuthService,
    IdentifyService,
    AdminService
  ]
})

export class AppModule { }
