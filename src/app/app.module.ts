import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SubjectsServiceService } from './subjects-service.service';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule],
  declarations: [ AppComponent, MainComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SubjectsServiceService]
})
export class AppModule { }
