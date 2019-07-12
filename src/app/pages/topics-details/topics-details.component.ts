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
  ) {
    //this.getFakeData();  
  }

  ngOnInit() {
    this.subject = this.pagesService.storage;
    //console.log(this.subject.teachers);
  }

  getFakeData(){
    this.subject = { 
      "start":[  
         {  
            "hour": "11",
            "minutes": "30",
            "dayTime": "am"
          }
      ],
      "end":[  
        {  
          "hour": "12",
          "minutes": "30",
          "dayTime": "am"
        }
      ],
      "subject": "Computación",
      "topicId": 3,  
      "teachers":[  
        {  
          "name": "Teacher 4",
          "avatar": "https://api.adorable.io/avatars/285/teacher4.png"
        },
        {  
          "name": "Teacher 5",
          "avatar": "https://api.adorable.io/avatars/285/teacher5.png"
        }
      ]
    }
  }

}
