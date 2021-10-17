import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import {MatIconModule} from '@angular/material/icon';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatButtonModule} from '@angular/material/button';
 import {MatCardModule} from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {  RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTabsModule } from '@angular/material/tabs';

import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';

import { MatTooltipModule } from '@angular/material/tooltip';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookTripsComponent } from './book-trips/book-trips.component';
import { ViewBookedTripsComponent } from './view-booked-trips/view-booked-trips.component';

const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'booktrips', component: BookTripsComponent},
  {path:'viewbookedtrips', component:ViewBookedTripsComponent}

 
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookTripsComponent,
    ViewBookedTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    
    FormsModule,
    
   
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatToolbarModule,
    PortalModule,
    OverlayModule,
    CdkTreeModule,
    CommonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule,
    MatGridListModule,
    MatBadgeModule,
    MatTreeModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatListModule,
MatRippleModule,

MatExpansionModule,

MatInputModule,
MatSelectModule,
MatDatepickerModule,
     RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
