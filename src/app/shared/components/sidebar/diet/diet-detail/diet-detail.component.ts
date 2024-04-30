import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar.component';
import { HeaderComponent } from '../../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, CommonModule],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent implements OnInit {
  dieta: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = Number(params['id']);
      const dietas = JSON.parse(localStorage.getItem('diets') || '[]');
      this.dieta = dietas.find((item: any) => item.id === id);
    });
  }

  voltar() {
    this.router.navigate(['/diet'])
  }
}


