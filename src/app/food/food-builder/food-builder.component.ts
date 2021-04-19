import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDirective } from '../food.directive';
import { SushiComponent } from './sushi/sushi.component';
import { PizzaComponent } from './pizza/pizza.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FoodService } from '../food.service';


const foods = {
  'pizza': PizzaComponent,
  'sushi': SushiComponent
}



@Component({
  selector: 'app-food-builder',
  templateUrl: './food-builder.component.html',
  styleUrls: ['./food-builder.component.css']
})
export class FoodBuilderComponent implements OnInit {
  foodName: string;
  @ViewChild(FoodDirective, { static: true }) foodComponent: FoodDirective
  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private foodService:FoodService

    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => { 
      this.foodName = params.foodName
      this.foodService.prevFoodName = this.foodName
    })

    if (foods[this.foodName]){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(foods[this.foodName])
      const componentRef = this.foodComponent.viewContainerRef.createComponent(componentFactory)
    } else {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotFoundComponent)
      const componentRef = this.foodComponent.viewContainerRef.createComponent(componentFactory) 
    }
    
    this.foodService.getUrl()
  }
}
