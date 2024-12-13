import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MascotaResponse } from '../models/mascota-response.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaViewmodelService {
  private apiUrl = 'https://app.juankuga.com/wspatitas/mascotaperdida.php';

  constructor(private http: HttpClient) {}

  listarMascotas(): Observable<MascotaResponse[]> {
    return this.http.get<MascotaResponse[]>(this.apiUrl);
  }
}
