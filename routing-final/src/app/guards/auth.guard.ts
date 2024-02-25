import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated()
    .then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          router.navigate(['/']);
          return false
        }
      }
    );
};
