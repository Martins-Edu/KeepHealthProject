import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, FormsModule, CommonModule,],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  arrayDietas: any[] = [{
    id: 1,
    name: "Dieta Vegana",
    description: "A dieta vegana exclui todos os produtos de origem animal, incluindo carne, laticínios, ovos e mel. Baseia-se em alimentos de origem vegetal, como frutas, legumes, grãos, nozes e sementes. A quantidade de calorias varia dependendo da seleção de alimentos, mas geralmente é rica em fibras e baixa em calorias densas.",
    qttCalories: "1200-1800",
    imageLink: "assets/vegana.jpg"
  },
  {
    id: 2,
    name: "Dieta Vegetariana",
    description: "A dieta vegetariana exclui carne, mas pode incluir laticínios e ovos. Ela é baseada principalmente em alimentos vegetais, como frutas, legumes, grãos, nozes e sementes, mas pode variar em termos de inclusão de produtos lácteos e ovos. A ingestão calórica pode variar amplamente, mas geralmente é semelhante à dieta vegana.",
    qttCalories: "1200-1800",
    imageLink: "assets/vegetariana.jpg"
  },
  { id: 3,
    name: "Dieta Dukan",
    description: "A dieta Dukan é uma dieta rica em proteínas e baixa em carboidratos, dividida em quatro fases, sendo duas de emagrecimento e duas de estabilização do peso. Na fase de emagrecimento, há um foco em alimentos ricos em proteínas, como carne magra, peixe, aves e produtos lácteos com baixo teor de gordura.",
    qttCalories: "1000-1500",
    imageLink: "assets/dukan.jpg"
  },
  { id: 4,
    name: "Dieta Low-Carb",
    description: "A dieta low-carb envolve a redução significativa da ingestão de carboidratos, aumentando a proporção de proteínas e gorduras na alimentação. Isso inclui alimentos como carne, peixe, ovos, vegetais não amiláceos e gorduras saudáveis.",
    qttCalories: "1200-1800",
    imageLink: "assets/lowCarb.jpg"
  },
  { id: 5,
    name: "Dieta Sem Açucar",
    description: "Esta dieta elimina alimentos que contêm açúcares adicionados, concentrando-se em alimentos naturais e integrais. Ela inclui frutas, vegetais, proteínas magras e gorduras saudáveis.",
    qttCalories: "1200-1800",
    imageLink: "assets/semAcucar.jpg"
  },
  { id: 6,
    name: "Dieta Sem Glúten",
    description: "A dieta sem glúten exclui alimentos que contêm glúten, como trigo, cevada e centeio. Ela concentra-se em alimentos como arroz, milho, quinoa, batata, frutas, legumes, carne, peixe, aves e produtos lácteos.",
    qttCalories: "1200-1800",
    imageLink: "assets/semGluten.jpg"
  },
  { id: 7,
    name: "Dieta Cetogênica",
    description: "A dieta cetogênica é muito baixa em carboidratos e rica em gorduras, levando o corpo a um estado de cetose, no qual queima gordura como principal fonte de energia. Os alimentos incluem carne, peixe, ovos, nozes, sementes, óleos saudáveis e vegetais não amiláceos.",
    qttCalories: "1000-1800",
    imageLink: "assets/cetogenica.jpg"
  },
  { id: 8,
    name: "Dieta Intermitente",
    description: "O jejum intermitente não é tanto uma dieta específica, mas um padrão de alimentação que alterna entre períodos de jejum e alimentação. Existem várias formas de jejum intermitente, como o método 16/8, onde você jejua por 16 horas e tem uma janela de alimentação de 8 horas.",
    qttCalories: "1200-2000",
    imageLink: "assets/intermitente.jpg"
  },
  { id: 9,
    name: "Dieta DASH",
    description: "É uma dieta focada em reduzir a pressão arterial e promover a saúde do coração. Ela enfatiza alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais, proteínas magras e laticínios com baixo teor de gordura.",
    qttCalories: "1200-2000",
    imageLink: "assets/DASH.jpg"
  },
  { id: 10,
    name: "Dieta Paleolítica",
    description: "É baseada nos alimentos consumidos pelos nossos ancestrais do período Paleolítico, antes do surgimento da agricultura. Ela enfatiza alimentos não processados, como carne magra, peixe, frutas, vegetais, nozes e sementes. Alimentos como grãos, laticínios e leguminosas são evitados.",
    qttCalories: "1200-1800",
    imageLink: "assets/paleolitica.jpg"
  },
]
  dieta: any;
  
  constructor(private router: Router){
    localStorage.setItem('diets',JSON.stringify(this.arrayDietas));
  }

  @Input() item: { name: string; imageLink: string; } | undefined;

  mostrarDetalhes(id: number) {
    const dieta = this.arrayDietas.find(item => item.id === id);
    if (dieta) {
      this.router.navigate(['/diet', dieta.id]);
    }
  }
}

