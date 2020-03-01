import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  constructor() { }

  monster: Monster = {
    id: 1,
    name: 'Baby Dragon',
    attack: 1200,
    defense: 700
  };

  ngOnInit() {
  }

}
