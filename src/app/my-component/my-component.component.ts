import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
