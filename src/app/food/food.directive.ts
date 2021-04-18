import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[foodName]'
})
export class FoodDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
