import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FoundersComponent } from './founders/founders.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'services',
        component: ServicesComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'founders',
        component: FoundersComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
