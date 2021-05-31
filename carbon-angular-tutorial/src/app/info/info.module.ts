// default imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// carbon imports
import { GridModule } from "carbon-components-angular";

// custom components
import { InfoCardComponent } from "./info-card/info-card.component";
import { InfoSectionComponent } from "./info-section/info-section.component";
import { ApplicationModule, PersonFavoriteModule, GlobeModule } from "@carbon/icons-angular";

@NgModule({
    declarations: [InfoCardComponent, InfoSectionComponent],
    imports: [CommonModule, GridModule, PersonFavoriteModule, GlobeModule, ApplicationModule],
    exports: [InfoCardComponent, InfoSectionComponent],
})
export class InfoModule {}
