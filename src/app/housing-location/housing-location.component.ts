import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; // 非null assertion
}
