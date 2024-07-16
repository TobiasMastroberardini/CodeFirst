import { Component } from '@angular/core';
import { PresentationComponent } from "../presentation/presentation.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentationComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
rutaImagen: string ='assets/img/logo.jpeg';
}
