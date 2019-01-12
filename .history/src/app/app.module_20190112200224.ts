import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule,
  MatSortModule } from '@angular/material';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBoxComponent,
    MyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
