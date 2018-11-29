import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
	{path: '', component: DashboardComponent, data: {state: 'dashboard'}},
	{path: 'projects', component: ProjectListComponent, data: {state: 'project-list'}},
	{path: 'clients', component: ClientComponent, data: {state: 'clients'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
