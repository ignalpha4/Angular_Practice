import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userAuthService = inject(UserAuthService);
  const router = inject(Router);

  const currentUser = userAuthService.getCurrentUser();

  //to check if currentUser is set or not
  if (!currentUser) {
    console.log("Login required")
    router.navigate(['/login']);
    return false;
  }

  //to check the authorization of user if he is allowed to access or not
  const requiredRoles = route.data?.['roles'];

  if (requiredRoles && !requiredRoles.includes(currentUser.role)) {
    alert("User not authorized to add suppliers or Categories")
    // router.navigate(['/dashboard/products']);
    return false;
  }

  return true;
};
