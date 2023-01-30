import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  diva: HTMLElement | null;
  divb: HTMLElement | null;
  divc: HTMLElement | null;

  val:string = 'selected';
  tab:string | null;
  constructor () {
    this.diva = null;
    this.divb = null;
    this.divc = null;
    this.tab = null;
  }
  ngOnInit(): void {
    this.diva = document.getElementById('diva');
    this.divb = document.getElementById('divb');
    this.divc = document.getElementById('divc');
    this.focusOnDiv('a');
  }

  focusOnDiv(element: string) {

    if (element == 'a') {
      this.tab = 'a';
      this.diva?.classList.replace('invisable', 'visable');
      if (this.divb?.classList.contains('visable')){
        this.divb?.classList.replace('visable', 'invisable');
      }
      if (this.divc?.classList.contains('visable')){
        this.divc?.classList.replace('visable', 'invisable');
      }
      
    }
    else if (element == 'b') {
      this.tab = 'b';
      this.divb?.classList.replace('invisable', 'visable');
      if (this.diva?.classList.contains('visable')){
        this.diva?.classList.replace('visable', 'invisable');
      }
      if (this.divc?.classList.contains('visable')){
        this.divc?.classList.replace('visable', 'invisable');
      }
    } 
    else if (element =='c') {
      this.tab = 'c';
      this.divc?.classList.replace('invisable', 'visable');
      if (this.diva?.classList.contains('visable')){
        this.diva?.classList.replace('visable', 'invisable');
      }
      if (this.divb?.classList.contains('visable')){
        this.divb?.classList.replace('visable', 'invisable');
      }
    }
  }
}
