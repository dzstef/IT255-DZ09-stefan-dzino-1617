import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   template:`  
        <li *ngFor="#myItem of itemList">{{myItem.name}}</li>  
		`
})
export class ItemComponent{
   public itemList = [
      {name:"Teretana"},
      {name:"Velnes"},
      {name:"Bazen"},
   ];
}