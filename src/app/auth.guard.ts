import { CanActivateFn, Router } from '@angular/router';
import { LoginViewmodelService } from './viewmodels/login-viewmodel.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginViewModel = inject(LoginViewmodelService);
  const router = inject(Router);

  // loginViewModel.loginState$.pipe(
  //   map((isLoggedIn: boolean) => {
  //     if (isLoggedIn) {
  //       return true;
  //     } else {
  //       router.navigate(['login']);
  //       return false;
  //     }
  //   })
  // );
  return true;
};
