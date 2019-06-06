import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, args);
    let newstring = value;
    if (args[0]) {
      //add a fullstop
      newstring += ".";
    }
    if (args[1] === "singlequote") {
      newstring = "'" + newstring;
    } else if (args[1] === "doublequote") {
      newstring = '"' + newstring;
    }
    return newstring;
  }
}
