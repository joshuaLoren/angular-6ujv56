import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {MatCardModule} from '@angular/material/card';
import { MainService } from './services/main.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule],
  declarations: [ AppComponent, MainComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MainService]
})
export class AppModule { }
