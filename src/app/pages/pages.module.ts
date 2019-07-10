import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PagesRoutingModule } from './pages-routing.module';

import { TopicsComponent } from './topics/topics.component';
import { TopicsDetailsComponent } from './topics-details/topics-details.component';

import { PagesService } from './pages.service';

const PAGES_COMPONENTS = [
  TopicsComponent,
  TopicsDetailsComponent
]

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    NativeScriptCommonModule,
    PagesRoutingModule
  ],
  providers: [PagesService]
})
export class PagesModule { }
