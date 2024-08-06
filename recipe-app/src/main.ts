import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as lodash from 'lodash';
import * as moment from 'moment';
import { AppModule } from './app/app.module';

declare global {
  const _: typeof lodash;
  const moment: typeof moment;
}
// And this makes `_` available globally as a JS object:
(window as any)['_'] = lodash;
(window as Window & typeof globalThis)['moment'] = moment;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
