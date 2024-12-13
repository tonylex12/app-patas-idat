import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material/material.module';
import { LoginViewmodelService } from '../../viewmodels/login-viewmodel.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  mensaje: string | null = null;

  constructor(
    private LoginViewmodel: LoginViewmodelService,
    private router: Router
  ) {}

  onLogin() {
    this.LoginViewmodel.login(this.usuario, this.password).subscribe({
      next: (response) => {
        // console.log(response);
        if (response.rpta) {
          this.router.navigate(['dashboard']);
        }
        this.mensaje = response.mensaje;
      },
      error: (error) => {
        this.mensaje = 'El usuario o la contraseña son incorrectos';
        console.log(error);
      },
    });
  }
}
