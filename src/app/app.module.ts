import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { NewProviderComponent } from './new-provider/new-provider.component';
import { StoresWarehousesComponent } from './stores-warehouses/stores-warehouses.component';
import { ProductoStockUpdateComponent } from './producto-stock-update/producto-stock-update.component';
import { CloseSessionComponent } from './close-session/close-session.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProvidersComponent,
    EditProviderComponent,
    NewProviderComponent,
    StoresWarehousesComponent,
    ProductoStockUpdateComponent,
    CloseSessionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
