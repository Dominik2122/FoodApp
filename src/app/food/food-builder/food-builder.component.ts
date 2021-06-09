import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDirective } from '../food.directive';
import { SushiComponent } from './sushi/sushi.component';
import { PizzaComponent } from './pizza/pizza.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FoodService } from '../food.service';


const foods = {
  pizza: PizzaComponent,
  sushi: SushiComponent
};


@Component({
  selector: 'app-food-builder',
  templateUrl: './food-builder.component.html',
  styleUrls: ['./food-builder.component.css']
})
export class FoodBuilderComponent implements OnInit {
  foodName: string;
  @ViewChild(FoodDirective, { static: true }) foodComponent: FoodDirective;
  currentComponent: ComponentFactory<any>;

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private foodService: FoodService
  ) {
  }

  ngOnInit(): void {
    this.subscribeForRouteParams();
    this.renderCurrentComponent();
  }

  private renderCurrentComponent(): void {
    if (foods[this.foodName]) {
      this.currentComponent = this.componentFactoryResolver.resolveComponentFactory(foods[this.foodName]);
    } else {
      this.currentComponent = this.componentFactoryResolver.resolveComponentFactory(NotFoundComponent);
    }
    this.currentComponentFactory(this.currentComponent);
  }

  private currentComponentFactory(component: ComponentFactory<any>): void {
    const componentRef = this.foodComponent.viewContainerRef;
    componentRef.clear();
    componentRef.createComponent(component);
  }

  private subscribeForRouteParams(): void {
    this.route.params.subscribe((params) => {
      this.foodName = params.foodName;
      this.foodService.prevFoodName = this.foodName;
    });
  }
}
