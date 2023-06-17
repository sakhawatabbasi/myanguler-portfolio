import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { UtilitiesComponent } from './includes/utilities/utilities.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule,}   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './pages/home/home.component';
import { SkillComponent } from './pages/skill/skill.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';


import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UtilitiesComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    SkillComponent,
    QualityComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot([]),MatGridListModule,MatCardModule
    
  ],
  exports:[
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
