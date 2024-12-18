import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"form", component: FormComponent},
    {path:"display", component: DisplayComponent},
];