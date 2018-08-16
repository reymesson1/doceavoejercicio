import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,  
  MatFormFieldControl,
  // MatSpinner
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { Routes, RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { HomeComponent } from "./home/home.component";
import { MasterComponent } from "./master/master.component";
import { DetailComponent } from "./detail/detail.component";
import { RegistrationComponent } from "./admin/registration.component";  
import { LoginComponent } from "./admin/login.component";
import { ViewComponent } from "./master/view.component";
import { RestSourceData }  from "./model/rest.datasource";

import { DialogOverviewExampleDialog } from "./master/dialog-overview-example-dialog";

import { AuthGuard } from "./services/auth.guard.service";

@NgModule({ 
  declarations: [
     AppComponent,HomeComponent, MasterComponent, DetailComponent, RegistrationComponent, LoginComponent, DialogOverviewExampleDialog, ViewComponent, //MatSpinner
  ],
  imports: [
    MomentModule,BrowserModule, HttpClientModule,FormsModule, ReactiveFormsModule, BrowserAnimationsModule, 
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatIconModule, MatGridListModule, 
    MatDividerModule, MatCardModule, MatTableModule, MatTooltipModule,  MatFormFieldModule,  MatRadioModule,MatOptionModule,MatSelectModule, MatSliderModule,  MatInputModule,  
    MatDialogModule, MatMenuModule, MatProgressBarModule,MatSortModule, MatPaginatorModule, MatProgressSpinnerModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "master", component: MasterComponent, canActivate: [ AuthGuard ] },      
      { path: "detail", component: DetailComponent, canActivate: [ AuthGuard ] },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      { path: "view", component: ViewComponent },
      { path: "view/:id", component: ViewComponent },
      { path: "**", redirectTo: '/master' }  
    ])
  ],
  providers: [RestSourceData, AuthGuard],
  bootstrap: [AppComponent, DialogOverviewExampleDialog]
})
export class AppModule { }
