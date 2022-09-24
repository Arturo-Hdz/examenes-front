import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) {}
    public listarCuestionarios(){
      return this.http.get(`${baserUrl}/examen/`)
    }
   }
