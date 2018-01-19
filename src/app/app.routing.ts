import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';

/**
 * This array describes the application routes
 * @type {Route[]}
 */
export const routes: Array<Route> = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
