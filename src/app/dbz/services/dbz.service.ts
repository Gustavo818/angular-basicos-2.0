import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';

@Injectable()
export class DbzService{
    
 private _personajes : Personaje[] = [
    {
      nombre:"Krilli",
      poder:1200
    },
    {
      nombre :"Goku",
      poder : 15000
    },
    {
      nombre:"Vegeta",
      poder : 7500
    }
  ]

  get personajes():Personaje[] {
    return [...this._personajes ];
  }
  constructor(){
    console.log('Servicio Inicializado ...')
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}