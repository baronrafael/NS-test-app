import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private page: Page, 
    private router: Router,
    private pagesService: PagesService
  ) 
  
  {
    this.getFakeData(); 

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
  }

  public onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmentedBar.selectedIndex;
  }

  public onItemTap(args) {
    //console.log("Item Tapped at cell index: " + args.index);
    this.pagesService.storage = this.days[this.selectedIndex].topics[args.index];
    //console.log(this.pagesService.storage);
    this.router.navigate(["pages/topics-details"]);
  }

  getWeekdays(){
    this.pagesService.getWeekdays()
    .subscribe(
      res => {
        //console.log(res);
        this.days = res;
      },
      err => {
        //console.log(err);
      }
    );
  }

  getFakeData(){
    this.days = [
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
                         "hour": "8",
                         "minutes": "00",
                         "dayTime": "am"
                      }
                  ],
                 "end":[  
                      {  
                         "hour": "9",
                         "minutes": "00",
                         "dayTime": "am"
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
                         "hour": "9",
                         "minutes": "15",
                         "dayTime": "am"
                      }
                  ],
                 "end":[  
                      {  
                         "hour": "10",
                         "minutes": "15",
                         "dayTime": "am"
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
                         "hour": "10",
                         "minutes": "15",
                         "dayTime": "am"
                      }
                  ],
                 "end":[  
                      {  
                         "hour": "11",
                         "minutes": "15",
                         "dayTime": "am"
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
