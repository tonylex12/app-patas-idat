import { CanActivateFn, Router } from '@angular/router';
import { LoginViewmodelService } from './viewmodels/login-viewmodel.service';
import { inject } from '@angular/core';
// import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginViewModel = inject(LoginViewmodelService);
  const router = inject(Router);
  const valorSessionStorage = loginViewModel.isLogin();
  if (!!valorSessionStorage) {
    return true;
  }
  router.navigate(['login'], { queryParams: { blockedPage: state.url } });
  return false;
};
