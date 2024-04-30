import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  formCadastro = new FormGroup({
    nome: new FormControl(''),
    emailUsuario: new FormControl(''),
    dataNascimento: new FormControl(''),
    senhaUsuario: new FormControl(''),
    confirmaSenha: new FormControl(''),
    pesoUsuario: new FormControl(''),
    alturaUsuario: new FormControl(''),
    enderecoUsuario: new FormControl('')
  })

  cadastrar() {
    if(this.formCadastro.value.nome && this.formCadastro.value.emailUsuario && this.formCadastro.value.dataNascimento && this.formCadastro.value.senhaUsuario && this.formCadastro.value.confirmaSenha && this.formCadastro.value.pesoUsuario && this.formCadastro.value.alturaUsuario && this.formCadastro.value.enderecoUsuario) {
      if (this.formCadastro.value.senhaUsuario === this.formCadastro.value.confirmaSenha) {
        const usuario = {
          nome: this.formCadastro.value.nome,
          emailUsuario: this.formCadastro.value.emailUsuario, 
          dataNascimento: this.formCadastro.value.dataNascimento,
          senhaUsuario: this.formCadastro.value.senhaUsuario,
          confirmaSenha: this.formCadastro.value.confirmaSenha,
          pesoUsuario: this.formCadastro.value.pesoUsuario,
          alturaUsuario: this.formCadastro.value.alturaUsuario,
          enderecoUsuario: this.formCadastro.value.enderecoUsuario
        }
        window.localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        alert("Usuário cadastrado com sucesso")
      } else {
        alert("As senhas não coincidem");
      }
    } else {
      alert("Preencha todos os espaços");
    }
  }

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate([''])
  }
}
