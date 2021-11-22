import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() destination: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
