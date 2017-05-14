import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { ConversionService} from 'app/Conversion.service';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { FilterName} from './filterName.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    HeaderComponent,
    FooterComponent,
    FilterName
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ConversionService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
