import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData = {
  "username":'',
  "password":''
}

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    // console.log('click en el boton de login');
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('el nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('Password requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

  }
}
