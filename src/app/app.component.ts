import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'macbook';

  currentInput: string = '';
  result: string = '';
  
  buttons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  onButtonClick(button: string): void {
    if (button === 'C') {
      this.clearInput();
    } else if (button === '=') {
      this.calculateResult();
    } else {
      this.updateInput(button);
    }
  }

  updateInput(value: string): void {
    if (this.currentInput === '0') {
      this.currentInput = value;
    } else {
      this.currentInput += value;
    }
  }

  clearInput(): void {
    this.currentInput = '';
  }

  calculateResult(): void {
    try {
      this.result = eval(this.currentInput).toString();
      this.currentInput = this.result;
    } catch (e) {
      this.currentInput = 'Error';
    }
  }
}
