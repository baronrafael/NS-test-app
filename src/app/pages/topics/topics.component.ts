import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';

import { Page } from "tns-core-modules/ui/page";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

@Component({
  selector: 'ns-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsComponent implements OnInit {

  weekDays: Array<SegmentedBarItem>;
  initialDays: any;

  public selectedIndex = 0;

  constructor(private page: Page) {
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
  }

  public onSelectedIndexChange(args) {
    let segmentedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmentedBar.selectedIndex;
}

}
