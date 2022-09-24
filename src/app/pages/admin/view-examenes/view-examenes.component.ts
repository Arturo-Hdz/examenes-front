import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent implements OnInit {

  examenes:any=[]

  constructor(private examenService:ExamenService) { }

  ngOnInit(): void {
    this,this.examenService.listarCuestionarios().subscribe(
    (dato:any) => {
      this.examenes = dato;
      console.log(this.examenes);
    },
    (error) => {
      console.log(error);
      Swal.fire('Error','Error al cargar los examenes','error');
    })
    }
  }
