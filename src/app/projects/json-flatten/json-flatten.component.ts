import { Component, ViewChild } from '@angular/core';
import { JsonFlattenService } from './json-flatten.service';
import { NgModel }   from '@angular/forms';

@Component({
  selector: 'json-flatten',
  templateUrl: './json-flatten.component.html',
  styleUrls: ['./json-flatten.component.css']
})
export class JsonFlattenComponent {
  @ViewChild("jsonOfTheUserModel")
  jsonOfTheUserModel: NgModel;
  jsonOfTheUser: string = JSON.stringify({a:"hey", b:{number:4}, c:{question:"how are you?"}}, null, 4);

  constructor(private jsonFlattenService: JsonFlattenService) { }

  flattenJson(): void {
    this.parseMapAndPrintJsonOfTheUser(this.jsonFlattenService.flatten);
  }

  unflattenJson(): void {
    this.parseMapAndPrintJsonOfTheUser(this.jsonFlattenService.unflatten);
  }

  parseMapAndPrintJsonOfTheUser(func: ((obj: any) => any) ): any {
    try {
      this.jsonOfTheUser = JSON.stringify(func(JSON.parse(this.jsonOfTheUser)), null, 4);
    } catch (exception) {
      this.jsonOfTheUserModel.control.setErrors(exception); 
      console.warn(exception);
    }
  }
}
