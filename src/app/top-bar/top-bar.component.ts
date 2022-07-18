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
    const catInfo = document.getElementById('cat1');
    const catMeca = document.getElementById('cat2');
    
    if(infos !== null && mecas !== null && catInfo !== null && catMeca !== null) {
      infos.style.display = 'block';
      mecas.style.display = 'none';
      catInfo.style.background = '#eebb14';
      catInfo.style.color = 'black';
      catMeca.style.background = 'black';
      catMeca.style.color = '#eebb14';
    }
  }

  getMeca() {
    const infos = document.getElementById('infos');
    const mecas = document.getElementById('mecas');
    const catInfo = document.getElementById('cat1');
    const catMeca = document.getElementById('cat2');
    
    if(infos !== null && mecas !== null && catInfo !== null && catMeca !== null) {
      infos.style.display = 'none';
      mecas.style.display = 'block';
      catMeca.style.background = '#eebb14';
      catMeca.style.color = 'black';
      catInfo.style.background = 'black';
      catInfo.style.color = '#eebb14';
    }
  }

}
