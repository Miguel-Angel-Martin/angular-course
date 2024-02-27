import { ResolveFn } from '@angular/router';

export const serverResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
