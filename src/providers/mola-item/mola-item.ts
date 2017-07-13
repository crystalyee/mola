//import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MolaItemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
//@Injectable()
export class MolaItem {
	private id: number;
	private name: string;
	private icon: string;
	private quantity: number;
	private cost: number;
	private description: string;
  private type: string;


  constructor(id: number, name: string, icon: string, quantity: number, cost: number, description: string, type: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.quantity = quantity;
    this.cost = cost;
    this.description = description;
    this.type = type;
  }

  getId()
  {
  	return this.id;
  }

  getName()
  {
  	return this.name;
  }

  getIcon()
  {
  	return this.icon;
  }

  getQuantity()
  {
  	return this.quantity;
  }

  getCost()
  {
  	return this.cost;
  }

  getDescription()
  {
  	return this.description;
  }

  getType()
  {
    return this.type;
  }
}
