import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';

import { Page } from "tns-core-modules/ui/page";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

import { PagesService } from '../pages.service';

@Component({
  selector: 'ns-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsComponent implements OnInit {

  days: any;

  weekDays: Array<SegmentedBarItem>;
  initialDays: any;

  public selectedIndex = 0;

  constructor(private page: Page, private pagesService: PagesService) {
    this.weekDays = [];
    this.initialDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    this.initialDays.forEach(element => {
      const segmentedBarItem = new SegmentedBarItem();
      segmentedBarItem.title = element;
      this.weekDays.push(segmentedBarItem);
    });
  }

  ngOnInit() {
    //this.page.actionBarHidden = true;
    //this.getWeekdays();
    this.getFakeData();
    console.log(this.days.weekdays[2].dayName);
  }

  public onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmentedBar.selectedIndex;
  }

  public onItemTap(args) {
    console.log("Item Tapped at cell index: " + args.index);
  }

  getWeekdays(){
    this.pagesService.getWeekdays()
    .subscribe(
      res => {
        //console.log(res);
        this.days = res;
        console.log(this.days[2]);
      },
      err => {
        console.log(err);
      }
    );
  }

  getFakeData(){
    this.days = {
      "weekdays": [
        { 
          "id": 0, 
          "dayName": "Lunes", 
          "topics":[]
        },
        { 
          "id": 1, 
          "dayName": "Martes", 
          "topics":[]
        },
        { 
          "id": 2, 
          "dayName": "Miercoles", 
          "topics":[
               { 
                "start":[  
                      {  
                         "hour": 8,
                         "minutes": 0
                      }
                  ],
                 "end":[  
                      {  
                         "hour": 9,
                         "minutes": 0
                      }
                  ],
                "subject": "Matemática",
                "topicId": 0, 
                "teachers":[  
                      {  
                           "name": "Teacher 1",
                    "avatar": "https://api.adorable.io/avatars/285/teacher1.png"
                      }
                  ]
              },
              { 
                "start":[  
                      {  
                         "hour": 9,
                         "minutes": 15
                      }
                  ],
                 "end":[  
                      {  
                         "hour": 10,
                         "minutes": 15
                      }
                  ],
                "subject": "Castellano",
                "topicId": 1,  
                "teachers":[  
                      {  
                           "name": "Teacher 2",
                    "avatar": "https://api.adorable.io/avatars/285/teacher2.png"
                      }
                  ]
              },
              { 
                "start":[  
                      {  
                         "hour": 10,
                         "minutes": 15
                      }
                  ],
                 "end":[  
                      {  
                         "hour": 11,
                         "minutes": 15
                      }
                  ],
                "subject": "Historia",
                "topicId": 2, 
                "teachers":[  
                      {  
                        "name": "Teacher 3",
                    "avatar": "https://api.adorable.io/avatars/285/teacher3.png"
                      }
                  ]
              },
              { 
                "start":[  
                      {  
                         "hour": 11,
                         "minutes": 30
                      }
                  ],
                 "end":[  
                      {  
                         "hour": 12,
                         "minutes": 30
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
            ]
        },
        { 
          "id": 3, 
          "dayName": "Jueves", 
          "topics":[]
        },
        { 
          "id": 4, 
          "dayName": "Viernes", 
          "topics":[]
        },
        { 
          "id": 5, 
          "dayName": "Sabado", 
          "topics":[]
        },
        { 
          "id": 6, 
          "dayName": "Domingo", 
          "topics":[]
        }
      ]
    }
  }

}
