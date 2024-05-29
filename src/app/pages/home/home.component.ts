import { Component } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service:OrderDetailsService) { }

  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
