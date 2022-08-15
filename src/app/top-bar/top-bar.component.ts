import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getInfo() {
    const infos = document.getElementById('infos');
    const mecas = document.getElementById('mecas');
    
    if(infos !== null && mecas !== null) {
      infos.style.display = 'block';
      mecas.style.display = 'none';
    }
  }

  getMeca() {
    const infos = document.getElementById('infos');
    const mecas = document.getElementById('mecas');
    
    if(infos !== null && mecas !== null) {
      infos.style.display = 'none';
      mecas.style.display = 'block';
    }
  }

}
