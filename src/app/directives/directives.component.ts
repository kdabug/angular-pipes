import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"]
})
export class DirectivesComponent implements OnInit {
  someRandomVariable = true;
  data = [{ name: "Mikayda", age: 27 }, { name: "Dallin", age: 26 }];
  constructor() {
    setInterval(() => {
      this.someRandomVariable = !this.someRandomVariable;
    }, 1000);
  }

  ngOnInit() {}
}
