import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '.././environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentifyComponent } from './identify/identify.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { QuestionaryModule } from './questionary/questionary.module';
import { EndingComponent } from './ending/ending.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app.routing.module';
import { AdminModule } from './admin/admin.module';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { IdentifyService } from './identify/identify.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,     
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule, 
    QuestionaryModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    IdentifyComponent, 
    TutorialComponent, 
    EndingComponent, AdminComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    AuthService,
    AuthGuard,
    IdentifyService
  ]
})

export class AppModule { }
