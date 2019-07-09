import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TopicsComponent } from './topics/topics.component';
import { TopicsDetailsComponent } from './topics-details/topics-details.component';

const routes: Routes = [
  { path: "", redirectTo: "topics", pathMatch: "full" },
  { path: "topics", component: TopicsComponent },
  { path: "topics-details", component: TopicsDetailsComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class PagesRoutingModule { }
