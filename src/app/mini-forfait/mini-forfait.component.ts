import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  @Input() destination: string = " ";
  @Input() villeDepart: string = " ";
  @Input() hotel: string = " ";
  @Input() dateDepart: string = " ";
  @Input() dateRetour: string = " ";

  constructor() { }

  ngOnInit(): void {
    
  }

}
