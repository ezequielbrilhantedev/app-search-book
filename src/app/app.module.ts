import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableListComponent } from './table-list/table-list.component';
import { LivrosService } from './service/livros.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
