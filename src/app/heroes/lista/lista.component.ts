import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent   {
  nombre: string = 'IronMan';
  edad  : number = 40;
 
  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  cambiarNombre():string{
    console.log('hey');
    return this.nombre = 'SpiderMan';
    
  }

  cambiarEdad():number{
   
    return this.edad = 30;
  }
  
}
