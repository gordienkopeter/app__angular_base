import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './common/shared.module';
import {AppConfig, loadConfig} from './app.config';

/**
 * This object describes initialize custom configured
 * @type {{provide: InjectionToken<(() => void)[]>; useFactory: (config: AppConfig) => () => void; deps: AppConfig[]; multi: boolean;}}
 */
const InitializeAppConfigProvider = {
  provide: APP_INITIALIZER,
  useFactory: loadConfig,
  deps: [AppConfig],
  multi: true
};

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppConfig,
    InitializeAppConfigProvider,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
