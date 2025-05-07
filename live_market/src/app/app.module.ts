import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoldComponent } from './components/gold/gold.component';
import { SilverComponent } from './components/silver/silver.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { GbpjpyComponent } from './components/gbpjpy/gbpjpy.component';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    SilverComponent,
    BitcoinComponent,
    GbpjpyComponent
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule,
   MatCardHeader,
   MatCardContent,
   MatCard,
   MatCardTitle,
   MatCardFooter,
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
