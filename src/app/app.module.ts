import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {EventServiceService} from './services/event-service.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventListComponent,
    EventDetailComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'events'},
      { path: 'events', component: EventListComponent},
      { path: 'events/addEvent', component: EventFormComponent}
    ])
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
