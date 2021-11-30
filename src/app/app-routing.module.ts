import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { BusinessUnitComponent } from './business-units/business-unit/business-unit.component';
import { BusinessUnitsComponent } from './business-units/business-units.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurVisionMissionValuesComponent } from './our-vision-mission-values/our-vision-mission-values.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'our-vision-mission-values', component: OurVisionMissionValuesComponent },
  { path: 'book', component: BookNowComponent },
  { path: 'business-units', component: BusinessUnitsComponent },
  { path: 'business-unit/:id', component: BusinessUnitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
