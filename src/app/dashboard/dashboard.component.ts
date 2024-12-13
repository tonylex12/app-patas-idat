import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';
import { LoginViewmodelService } from '../viewmodels/login-viewmodel.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginViewModel: LoginViewmodelService
  ) {}

  goHome() {
    this.router.navigate(['home'], { relativeTo: this.route });
  }

  logout() {
    this.loginViewModel.logout();
    this.router.navigate(['login']);
  }
}
