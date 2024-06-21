import { Routes } from '@angular/router';
import { FeaturesBaseComponent } from './features-base';

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: FeaturesBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
    ]
  },
];

