import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../servicios/rickandmorty.service';

@Component({
  selector: 'app-personajes',
  standalone: false,
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {

  personajes: any[] = [];
  personajeSeleccionado: any = null;
  mostrarModal: boolean = false;

abrirModal(personaje: any): void {
  
  this.personajeSeleccionado = personaje;
  this.mostrarModal = true;
  console.log(this.personajeSeleccionado)
}

cerrarModal(): void {
  this.mostrarModal = false;
}

  constructor(private rickService: RickandmortyService) { }

  ngOnInit(): void {

    this.rickService.obtenerPersonajes().subscribe(data => {
      this.personajes = data.results;
    });
    console.log(this.personajes)
  }

}
