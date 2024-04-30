import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  formLogin = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  })
   
  constructor(private router: Router) {}

  entrar() {
    const usuarioLogadoString = window.localStorage.getItem("usuarioLogado"); 

    if (usuarioLogadoString) {
      const usuarioLogado = JSON.parse(usuarioLogadoString);
      if (this.formLogin.value.email === usuarioLogado.emailUsuario && this.formLogin.value.senha === usuarioLogado.senhaUsuario) {  
        this.router.navigate(['/home']);
        return;
      }
    }
    alert('Usuário ou senha inválido');
  }
  
  cadastrarUsuario() {
    this.router.navigate(['/cadastro'])
  }
 
  lembraSenha() {
    const usuarioLogadoString = window.localStorage.getItem("usuarioLogado"); 
    
    if (usuarioLogadoString) {
      const usuarioLogado = JSON.parse(usuarioLogadoString);
      if (this.formLogin.value.email === usuarioLogado.emailUsuario) {
        usuarioLogado.senhaUsuario = "a1b2c4d4";
        window.localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        alert("A sua nova senha é: a1b2c4d4");
        return;
      } else {
        alert('Não foi possível localizar o usuário');
      }
    }
  }
  /**/
}