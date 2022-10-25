import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html' 
})

export class AgregarComponent   {

  // @Input() personajes :Personaje[] = [];

  //@Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter;
  constructor( private DbzService: DbzService ){}



  @Input() nuevo : Personaje ={
    nombre:'Maestro Roshi',
    poder: 1300
  }

  

   agregar() {
    if (this.nuevo.nombre.trim().length===0) {return}
    
    console.log(this.nuevo)

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:"",
      poder:0
    }
     
  }

  
}

 
