<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { HeaderComponent } from './header.component';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

describe('TutorialHeaderComponent', () => {
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderModule } from "carbon-components-angular/ui-shell/ui-shell.module";

import { HeaderComponent } from "./header.component";
import { Notification20Module } from "@carbon/icons-angular/lib/notification/20";
import { UserAvatar20Module } from "@carbon/icons-angular/lib/user--avatar/20";
import { AppSwitcher20Module } from "@carbon/icons-angular/lib/app-switcher/20";

describe("TutorialHeaderComponent", () => {
>>>>>>> 063b0a81d77ee5eb6ab3017e08e33d5a9f2cee53
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
<<<<<<< HEAD
			declarations: [HeaderComponent ],
=======
			declarations: [ HeaderComponent ],
>>>>>>> 063b0a81d77ee5eb6ab3017e08e33d5a9f2cee53
			imports: [
				HeaderModule,
				Notification20Module,
				UserAvatar20Module,
				AppSwitcher20Module
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

<<<<<<< HEAD
	it('should create', () => {
=======
	it("should create", () => {
>>>>>>> 063b0a81d77ee5eb6ab3017e08e33d5a9f2cee53
		expect(component).toBeTruthy();
	});
});
