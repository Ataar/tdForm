import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { playerFilterPipe } from './components/pipes/player.filter.';
import { PipeTestPipe } from './components/pipes/pipe-test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    playerFilterPipe,
    PipeTestPipe,
 
   
  ],
  imports: [
    BrowserModule,
   
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
