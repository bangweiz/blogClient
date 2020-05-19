import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() title: string
  yearStart: number
  yearEnd: number
  constructor() {
    this.yearEnd = new Date().getFullYear()
    this.yearStart = this.yearEnd - 1
  }
}
