import { Injectable } from '@angular/core';

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

@Injectable({
  providedIn: 'root'
})

export class JqueryService {

  constructor() {
    if (!window.$) {
      window.$ = window.jQuery; // Asegúrate de que jQuery esté asignado
    }
  }

  public useJQuery() {
    // Aquí puedes exponer métodos que usen jQuery
    return window.$;
  }

}
