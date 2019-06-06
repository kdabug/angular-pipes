import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
}
