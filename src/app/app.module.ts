import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { FooterComponent } from './footer/footer.component';
import { StudioComponent } from './studio/studio.component';
import { ProductionComponent } from './production/production.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationHomeComponent } from './realisation-home/realisation-home.component';
import { RealisationObjectComponent } from './realisation-object/realisation-object.component';
import { ObjectMenuComponent } from './realisation-object/object-menu/object-menu.component';
import { RealisationEspaceComponent } from './realisation-espace/realisation-espace.component';
import { EspaceMenuComponent } from './realisation-espace/espace-menu/espace-menu.component';
import { EspaceAppartementAtypiqueGrenobloisComponent } from './realisation-espace/espace-appartement-atypique-grenoblois/espace-appartement-atypique-grenoblois.component';
import { EspaceAppartementsDesCanutsComponent } from './realisation-espace/espace-appartements-des-canuts/espace-appartements-des-canuts.component';
import { RealisationMenuComponent } from './realisation-menu/realisation-menu.component';
import { TableSamComponent } from './realisation-object/table-sam/table-sam.component';
import { StrollMeComponent } from './realisation-object/stroll-me/stroll-me.component';
import { TablAChatComponent } from './realisation-object/tabl-a-chat/tabl-a-chat.component';
import { CraneLampComponent } from './realisation-object/crane-lamp/crane-lamp.component';
import { RollOnComponent } from './realisation-object/roll-on/roll-on.component';
import { MikadoComponent } from './realisation-object/mikado/mikado.component';
import { HybridaSonComponent } from './realisation-object/hybrida-son/hybrida-son.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DeliveryListComponent,
    FooterComponent,
    StudioComponent,
    ProductionComponent,
    ContactComponent,
    RealisationHomeComponent,
    RealisationObjectComponent,
    ObjectMenuComponent,
    RealisationEspaceComponent,
    EspaceMenuComponent,
    EspaceAppartementAtypiqueGrenobloisComponent,
    EspaceAppartementsDesCanutsComponent,
    RealisationMenuComponent,
    TableSamComponent,
    StrollMeComponent,
    TablAChatComponent,
    CraneLampComponent,
    RollOnComponent,
    MikadoComponent,
    HybridaSonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
