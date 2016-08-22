import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";

//Decorator
@NgModule({
    imports: [
        BrowserModule, routing
    ],
    declarations: [
        AppComponent, HomeComponent, AgendaComponent, AboutComponent,
        ContactsComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
