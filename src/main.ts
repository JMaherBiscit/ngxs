import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngxs/store';
import { AuthState } from './app/state/auth/auth.state';

bootstrapApplication(AppComponent, {
  providers: [provideStore([AuthState])],
});
