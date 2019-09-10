import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

// routes
import { appRoutes } from './routes/routes';


@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
