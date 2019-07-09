import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { TopicsComponent } from './topics/topics.component';
import { TopicsDetailsComponent } from './topics-details/topics-details.component';

const PAGES_COMPONENTS = [
  TopicsComponent,
  TopicsDetailsComponent
]

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
