import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective,
    HttpClientModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
