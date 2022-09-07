import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

public user = {
  username : '',
  password : '',
  nombre : '',
  apellidos : '',
  email : '',
  telefono : ''
}

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user)
    if(this.user.username == '' || this.user.username == null){
      // alert('El nombre de usuario es requerido');
      this.snack.open('El nombre de Usuario es requerido!!','Aceptar',{
        duration : 7000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.agregarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        // alert('Usuario Guardado con exito');
        Swal.fire('Usuario Guardado','Usuario registrado con exito en la base de datos','success');
      },(error) => {
        console.log(error);
        // alert('Ha ocurrido un error en el sistema');
        this.snack.open('Ha ocurrido un error en el sistema!!','Aceptar',{
          duration : 7000
        });
      });
  }

}
