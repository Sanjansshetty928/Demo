import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data: Array<Object> = [];
	fieldsvalues: Object;
	constructor() {
	this.data = [
		{text: "ListItem 1", value: "ListItem 1" },
		{text: "ListItem 2", value: "ListItem 2" },
		{text: "ListItem 3", value: "ListItem 3" },
		{text: "ListItem 4", value: "ListItem 4" },
		{text: "ListItem 5", value: "ListItem 5" }
		];
	this.fieldsvalues = { dataSource: this.data, text: "text", value: "value" };
	}
}
