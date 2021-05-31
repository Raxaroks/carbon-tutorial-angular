import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD:src/app/repositories/repositories.module.ts
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import {
	GridModule,
	TableModule,
	LinkModule,
	PaginationModule
} from 'carbon-components-angular';
import { RepoTableComponent } from './repo-table/repo-table.component';

@NgModule({
	declarations: [RepoPageComponent, RepoTableComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule,
		GridModule,
		TableModule,
		LinkModule,
		PaginationModule
	]
=======
import { RepositoriesRoutingModule } from "./repositories-routing.module";
import { RepoPageComponent } from "./repo-page/repo-page.component";
import { GridModule, TableModule, LinkModule, PaginationModule } from "carbon-components-angular";
import { RepoTableComponent } from "./repo-table/repo-table.component";

@NgModule({
    declarations: [RepoPageComponent, RepoTableComponent],
    imports: [
        CommonModule,
        RepositoriesRoutingModule,
        GridModule,
        TableModule,
        LinkModule, 
        PaginationModule
    ]
>>>>>>> 063b0a81d77ee5eb6ab3017e08e33d5a9f2cee53:carbon-angular-tutorial/src/app/repositories/repositories.module.ts
})
export class RepositoriesModule { }
