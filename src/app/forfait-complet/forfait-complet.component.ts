import { Component, OnInit, Input} from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  forfaits: Forfait[] = FORFAITS;
  @Input() destination = '';
  @Input() villeDepart = '';
  @Input() hotel = '';
  @Input() nom = '';
  @Input() adresse = '';
  @Input() nombreEtoiles = '';
  @Input() caracteristiques = '';
  @Input() dateDepart = '';
  @Input() dateRetour = '';
  @Input() duree: number = 0;
  @Input() prix: number = 0;
  @Input() rabais: number = 0;
  @Input() prixRabais: number = 0;
  @Input() forfaitVedette: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
