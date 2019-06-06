import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DirectivesComponent } from "./directives/directives.component";
import { PipesComponent } from "./pipes/pipes.component";

const routes: Routes = [
  { path: "directives", component: DirectivesComponent },
  { path: "pipes", component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
