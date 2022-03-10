import { Component, DebugElement, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  username: string;

  number= 0;
  width= 400;
  height= 300;
  timeout;
  isPlay= false;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
  }

  public galeriaAnimales=[
    {id: 0, src: "assets/galeria/", title: "cebras.jpg"},
    {id: 1, src: "assets/galeria/", title: "conejo.jpg"},
    {id: 2, src: "assets/galeria/", title: "demonio.jpg"},
    {id: 3, src: "assets/galeria/", title: "gatos.jpg"},
    {id: 4, src: "assets/galeria/", title: "hamster.jpg"},
    {id: 5, src: "assets/galeria/", title: "mula.jpg"},
    {id: 6, src: "assets/galeria/", title: "perro.jpg"},
    {id: 7, src: "assets/galeria/", title: "zarigueya.jpg"}
  ];

  anterior(){
    if(this.number===0)
    {
      this.number= this.galeriaAnimales.length-1;
    }
    else
    {
      this.number= this.number-1;
    }
  }

  siguiente(){
    if(this.number===this.galeriaAnimales.length-1)
    {
      this.number= 0;
    }
    else
    {
      this.number= this.number+1;
    }
  }

  aumentar(){
    this.width= this.width + 100;
    this.height= this.height + 50;

    const imagenSeleccionada = <HTMLElement> document.getElementsByClassName('imagenSeleccionada')[0];
    imagenSeleccionada.style.width = this.width+"px";
    imagenSeleccionada.style.height = this.height+"px";
  }

  disminuir(){
    this.width= this.width - 100;
    this.height= this.height - 50;

    const imagenSeleccionada = <HTMLElement> document.getElementsByClassName('imagenSeleccionada')[0];
    imagenSeleccionada.style.width = this.width+"px";
    imagenSeleccionada.style.height = this.height+"px";
  }

  play(){
    this.timeout = setInterval(() => this.siguiente(), 2000);
    this.isPlay= true;
  }

  stop(){
    clearTimeout(this.timeout);
    this.isPlay= false;
  }
}
