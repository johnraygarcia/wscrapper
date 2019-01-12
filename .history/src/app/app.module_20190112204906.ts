import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule,
  MatSortModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBoxComponent,
    MyDashboardComponent,
    MyTableComponent,
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
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
