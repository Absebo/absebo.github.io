import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }]
})
export class ProjectListComponent implements OnInit {

  constructor(public location: Location) {
    console.log(location);
   }

  ngOnInit() {
  
  }

}
