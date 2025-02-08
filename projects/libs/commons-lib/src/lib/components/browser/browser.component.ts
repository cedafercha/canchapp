import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiEnum, BrowserIdEnum } from '../../enum/commons.enum';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BrowserComponent),
  multi: true,
};

@Component({
  selector: 'lib-browser',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css',
  providers: [VALUE_ACCESSOR],
})
export class BrowserComponent implements ControlValueAccessor {

  @Input() browserId!: BrowserIdEnum;
  @Input() placeHolder: string = 'Browser.LookFor';
  @Input() addItem: boolean = false;

  @Output() onItemSelected = new EventEmitter<{ text: string, id: string, args?: string }>(); // Evento para emitir el ítem seleccionado

  public items: { text: string, id: string, args?: string }[] = [];
  public selectedItem: any = null;

  error: string | null = null;
  value: { text: string, id: string, args?: string } | null = null;
  isDisabled: boolean = false;

  onChangeFn: (value: { text: string, id: string, args?: string } | null) => void = () => {};
  onTouchedFn: () => void = () => {};

  private readonly inputSubject = new Subject<string>();
  private readonly inputSubscription: Subscription;

  constructor(
    public translate: TranslateService,
    private readonly http: HttpClient) {

    // Configurar el manejo de las entradas del usuario
    this.inputSubscription = this.inputSubject
    .pipe(
      debounceTime(300), // Espera 300 ms después de la última entrada
      distinctUntilChanged(), // Evita llamadas si el valor no cambia
      switchMap((filter) => this.callApi(filter).pipe(
        catchError((error) => {
          this.error = error.message || 'Error desconocido';
          return of([]); // Devuelve un array vacío para continuar el flujo
        })
      ))
    )
    .subscribe((response: { text: string, id: string, args?: string }[]) => {
      this.error = null; // Limpia el error en caso de éxito
      if(response.length == 0 && this.addItem)
        response.push({ text: 'Agregar item', id: '-1', args: 'addItem' });

      this.items = response;
    });
  }

  writeValue(value: { text: string, id: string, args?: string } | null): void {
    this.value = value || null;
  }

  registerOnChange(fn: (value: { text: string, id: string, args?: string } | null) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = { text: inputValue, id: '' }; // Solo el texto al principio
    // Notifica el cambio al formulario
    this.onChangeFn(this.value);

    // Emite el valor ingresado para manejarlo con debounceTime
    this.inputSubject.next(inputValue);
  }

  private callApi(filter: string): Observable<{ text: string, id: string, args?: string }[]> {
    const apiUrl = `${ApiEnum.Browser}GetBrowserNotTenant/${this.browserId}/${filter}`;
    return this.http.get<any[]>(apiUrl);
  }

  ngOnDestroy(): void {
    // Limpia la suscripción al destruir el componente
    this.inputSubscription.unsubscribe();
  }

  // Función para manejar la selección de un item
  onSelectItem(item: { text: string, id: string, args?: string }): void {
    if(item.id == '-1' && this.addItem) {
      this.items = []; // Limpia las sugerencias
      this.onItemSelected.emit(item); // Emitir el ítem seleccionado
      return;
    }
    this.selectedItem = item;
    this.value = item; // Establece el valor seleccionado
    this.onChangeFn(item); // Notifica al formulario
    this.items = []; // Limpia las sugerencias
  }

  clearSelected(): void {
    this.selectedItem = null;
    this.value = null; // Limpia el valor del campo
    this.items = []; // Limpia las sugerencias
    this.onChangeFn(null); // Notifica al formulario el cambio a vacío
  }

  selectItem(): any {
    return this.selectedItem;
  }

}
