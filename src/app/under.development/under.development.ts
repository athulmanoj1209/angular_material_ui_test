import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under.development',
  imports: [],
  templateUrl: './under.development.html',
  styleUrl: './under.development.css',
})
export class UnderDevelopment {
  router = inject(Router);
}
