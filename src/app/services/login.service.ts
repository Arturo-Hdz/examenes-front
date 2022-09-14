import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //llamar metodo al servidor para gemerar token
public generateToken(loginData:any){
  return this.http.post(`${baserUrl}/generate-token`,loginData)
}

//iniciar sesion y establecemos el token en el local storage
public loginUser(token:any){
  localStorage.setItem('token',token);
}

public isLoggedIn(){
  let tokenStr = localStorage.getItem('token');
  if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
    return false;
  }else{
    return true;
  }
}

// cerrar sesion y eliminamos el token del localStorage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//obtener el token
public getToken(){
  return localStorage.getItem('token');
}

public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

public getUser(){
  let userStr = localStorage.getItem('user');
  if(userStr != null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

public getUserRole(){
  let user = this.getUser();
  return user.authorities[0].authority;
}

public getCurrentUser(){
  return this.http.get(`${baserUrl}/actual-usuario`);
}
}
