import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  usuario: string;
  clave: string;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
  }


  login(){
    console.log(`usuario: ${this.usuario} password: ${this.clave}`);

    const request = {
      'username': this.usuario,
      'password': this.clave
    }

    this.authService.login(request).subscribe(response=>{
      console.log(response);
      this.router.navigate(['main']);


      //guardando informacion en el session storage para nuestro caso
      this.authService.guardarToken(response.token);

  },err=>{console.error("error al ingresar", err);});
  }
}
