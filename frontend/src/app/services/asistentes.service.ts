import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Asistente } from '../models/asistente';
import 'rxjs/Rx';


@Injectable()
export class AsistentesService {

  private url = 'http://localhost:3000/api';
  constructor(private http: Http) {

  }

  obtenerListaAsistentes() {
    return this.http.get(`${this.url}/asistentes`).map(res => res.json());
  }



}
