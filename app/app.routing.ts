import { Routes, RouterModule } from "@angular/router";

//Import Components to route to
import { HomeComponent } from "./home/home.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "agenda",
        component: AgendaComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contacts",
        component: ContactsComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
