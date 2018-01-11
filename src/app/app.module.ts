import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './common/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
