import { BrowserModule } from '@angular/platform-browser';
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
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TaskComponent } from './task/task.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';

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
    ProfileComponent,
    FavoritesComponent,
    TaskComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
