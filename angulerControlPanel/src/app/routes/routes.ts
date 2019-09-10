import { Routes } from '@angular/router';

import { ControlPanelComponent } from './../components/control-panel/control-panel.component';

export const appRoutes: Routes = [
  {
    path: 'controlpanel', component: ControlPanelComponent
    // children: [{path: '' }]
  },

  { path: '',
    redirectTo: '/controlpanel',
    pathMatch: 'full'
  },

];
