import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';

@Component({
  selector: 'ns-topics-details',
  templateUrl: './topics-details.component.html',
  styleUrls: ['./topics-details.component.css']
})
export class TopicsDetailsComponent implements OnInit {

  subject: any;

  constructor(
    private pagesService: PagesService
  ) 
  {}

  ngOnInit() {
    this.subject = this.pagesService.storage;
    //console.log(this.subject.teachers);
  }

}
