import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReversePipe } from './reverse.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [AppComponent, ReversePipe, DirectivesComponent, PipesComponent, RedblackDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
