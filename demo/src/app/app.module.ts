import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SuiSidebarModule } from "../../../src/public";
import { DemoRoutingModule } from "./app.routing";
import { DemoComponentsModule } from "./components/demo-components.module";
import { DemoModalsModule } from "./modals/demo-modals.module";
import { DemoPagesModule } from "./pages/demo-pages.module";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,

        SuiSidebarModule,

        DemoRoutingModule,
        DemoComponentsModule,
        DemoModalsModule,
        DemoPagesModule
    ],
    declarations: [AppComponent],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
