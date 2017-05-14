import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ConversionService} from 'app/Conversion.service';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FilterType} from './filterType.pipe';
import { FilterSearch} from './filterSearch.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    HeaderComponent,
    FooterComponent,
    FilterType,
    FilterSearch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ConversionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
