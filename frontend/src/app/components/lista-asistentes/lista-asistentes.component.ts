import { Component, OnInit } from '@angular/core';
import { AsistentesService } from '../../services/asistentes.service';
@Component({
  selector: 'app-lista-asistentes',
  templateUrl: './lista-asistentes.component.html',
  styleUrls: ['./lista-asistentes.component.css'],
  providers: [AsistentesService]
})
export class ListaAsistentesComponent implements OnInit {

  constructor(private serviceAsistente: AsistentesService) {

  }

  ngOnInit() {
    this.serviceAsistente.obtenerListaAsistentes().subscribe(res => console.log(res));
  }

}
