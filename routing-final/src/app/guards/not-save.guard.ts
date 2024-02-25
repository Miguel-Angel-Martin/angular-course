import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { CanComponentDeactivate } from '../interfaces/can-component-deactivate';


export const notSaveGuard: CanDeactivateFn<unknown> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot) => {
  return component.canDeactivate();
};
