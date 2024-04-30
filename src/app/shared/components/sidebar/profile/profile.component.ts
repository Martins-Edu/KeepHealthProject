import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { ConversorPipe } from '../../../../conversor.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ConversorPipe, DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  usuarioLogado: any;

  constructor(){
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      this.usuarioLogado = JSON.parse(usuarioLogado);
   }
  }
}
