import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { TrackerOverlayComponent } from './tracker-overlay/tracker-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProjectComponent,
    ProjectListComponent,
    ClientListComponent,
    DashboardComponent,
    TrackerComponent,
    NavigationComponent,
    QuickActionsComponent,
    TrackerOverlayComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
