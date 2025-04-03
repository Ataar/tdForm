import { Component } from '@angular/core';
import { Iplayer } from './components/models/player';
import {cricketers } from './components/consts/player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  titles = 'machineTestPipes';
  title = `Lorem ipsum dolor, sit amet consectetur 
  adipisicing elit. Hic vero placeat quibusdam 
  maxime ipsam voluptates natus perspiciatis. 
  Maiores, totam unde!`

  playerArr : Array<Iplayer> = cricketers
  searchVal  !: string;
  
}
