import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeSliderComponent } from './shared/home-slider/home-slider.component';
import { CardComponent } from './shared/card/card.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurVisionMissionValuesComponent } from './our-vision-mission-values/our-vision-mission-values.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNowComponent } from './book-now/book-now.component';
import { BannerWidgetComponent } from './shared/banner-widget/banner-widget.component';
import { WideCardComponent } from './shared/wide-card/wide-card.component';
import { BusinessUnitsComponent } from './business-units/business-units.component';
import { BusinessUnitComponent } from './business-units/business-unit/business-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HomeSliderComponent,
    CardComponent,
    ServicesComponent,
    AboutUsComponent,
    OurVisionMissionValuesComponent,
    ContactUsComponent,
    BookNowComponent,
    BannerWidgetComponent,
    WideCardComponent,
    BusinessUnitsComponent,
    BusinessUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
