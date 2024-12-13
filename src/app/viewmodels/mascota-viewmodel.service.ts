import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MascotaViewmodelService {
  private apiUrl = 'https://app.juankuga.com/wspatitas/mascotaperdida.php';

  constructor() {}
}
