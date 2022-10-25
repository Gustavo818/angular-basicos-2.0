import { Component  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
import { PersonajesComponent } from '../personajes/personajes.component';
 


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html', 
})
export class MainPageComponent   {
  
  // personajes: Personaje[]=[];

  nuevo:Personaje={
    nombre:"Maestro Roshi",
    poder:1000
  }

  //2  get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }


  // agregarNuevoPersonaje(argumento:Personaje)
  // {
  //   // console.log(argumento);
  //   this.personajes.push(argumento);
  // }
  constructor(){}

  //1  constructor(private DbzService: DbzService){
  //   this.personajes = this.DbzService.personajes;
  // }

}
