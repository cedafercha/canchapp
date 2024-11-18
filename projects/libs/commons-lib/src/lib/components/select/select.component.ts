import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiEnum, SelectIdEnum } from '../../enum/commons.enum';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [VALUE_ACCESSOR],
})
export class SelectComponent implements ControlValueAccessor, OnInit {

  @Input() selectId!: SelectIdEnum;
  @Input() placeHolder: string = 'Select.SelectOption';
  @Input() empty: boolean = true;

  public items: { text: string, id: string, args?: string }[] = [];
  error: string | null = null;
  value: { text: string, id: string, args?: string } | null = null;
  isDisabled: boolean = false;

  onChange: (value: { text: string, id: string, args?: string } | null) => void = () => {};
  onTouched: () => void = () => {};

  private selectSubscription: Subscription | undefined;

  constructor(
    public translate: TranslateService,
    private readonly http: HttpClient) {

  }

  ngOnInit(): void {
    const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
    this.selectSubscription = this.http.get<any[]>(apiUrl).subscribe((response) => {
      this.items = response;
    });
  }
  
  writeValue(value: { text: string, id: string, args?: string } | null): void {
    this.value = value || null;
  }

  registerOnChange(fn: (value: { text: string, id: string, args?: string } | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private callApi(): Observable<{ text: string, id: string, args?: string }[]> {
    const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
    return this.http.get<any[]>(apiUrl);
  }

  ngOnDestroy(): void {
    // Limpia la suscripción al destruir el componente
    this.selectSubscription!.unsubscribe();
  }

}
