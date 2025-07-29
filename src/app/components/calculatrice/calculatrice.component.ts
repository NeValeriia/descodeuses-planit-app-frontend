import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  standalone: false,
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  form : FormGroup;
  resutlat : any;

  constructor(fb : FormBuilder) {
    this.form = fb.group({
      a: [''],
      b: [''],
      operator: ['+']
    });
  }

  calculate() {
    const a = (this.form.value.a);
    const b = (this.form.value.b);
    const op = this.form.value.operator;
    let result: number;

    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : NaN; break;
      default: result = NaN;
    }

    this.resutlat = result;
  }
}
