import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"]
})
export class PipesComponent implements OnInit {
  title = "angular-pipes";
  amount = 101.25;
  private actualAmountInUSD = 50;

  get toggledAmount() {
    return this.INR ? this.actualAmountInUSD * 1.6 : this.actualAmountInUSD;
  }

  INR = true;
  get format() {
    return this.INR ? "INR" : "USD";
  }

  toggleINRandUSD() {
    this.INR = !this.INR;
  }

  constructor() {}

  ngOnInit() {}
}
