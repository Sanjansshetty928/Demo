import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
// import { HomeService } from '../home.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	dropdownList:any = [];
	dropdownList1:any=[]
	selectedItems:any = [];
	selectedItems1:any = [];
	dropdownSettings:IDropdownSettings = {};
	areas?:Array<string>=[]
	city?:string
	//dropdownSettings1:IDropdownSettings = {};
	// constructor(public homeService:HomeService){}
	// private param1?:HttpParams

	ngOnInit() {
	  this.dropdownList = [
		{ item_id: 1, item_text: '1BHK' },
		{ item_id: 2, item_text: '2BHK' },
		{ item_id: 3, item_text: '3BHK' },
		{ item_id: 4, item_text: '4BHK+' },
		
	  ];
	  this.dropdownList1 = [
		{ item_id: 1, item_text: 'Madiwala' },
		{ item_id: 2, item_text: 'Kormangala' },
		{ item_id: 3, item_text: 'Vijaynagar' },
		{ item_id: 4, item_text: 'Whitefield' },
		
	  ];
	  this.selectedItems = [
		{ },
		
	  ];
	  this.selectedItems1 = [
		{  },
		
	  ];
	  this.dropdownSettings = {
		singleSelection: false,
		idField: 'item_id',
		textField: 'item_text',
		selectAllText: 'Select All',
		unSelectAllText: 'UnSelect All',
		itemsShowLimit: 4,
		allowSearchFilter: true
	  };
	}
	onItemSelect(item: any) {
	//   console.log(item.item_text)
     this.areas?.push(item.item_text)


	}
	onSelectAll(items: any) {
	  console.log(items);
	}
	getCity(city:string)
	{
         console.log(city)
	}
	getProperties()
	{
		console.log(this.city)
		console.log(this.areas)
		// this.homeService.postParam(this.city,this.areas).subscribe
	}



}
