import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component";
import { ListProvidersComponent } from "../app/list-providers/list-providers.component";
import { EditProviderComponent } from "../app/edit-provider/edit-provider.component";
import { NewProviderComponent } from "../app/new-provider/new-provider.component";
import { StoresWarehousesComponent } from "../app/stores-warehouses/stores-warehouses.component";
import { ProductoStockUpdateComponent } from "../app/producto-stock-update/producto-stock-update.component";
import { CloseSessionComponent } from "../app/close-session/close-session.component";
import { AdminGuard } from  './admin/admin.guard';
import { LoginGuard } from  './admin/login.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },  
  {
      path: 'list-providers',
      component: ListProvidersComponent,
      canActivate: [AdminGuard]
  }, 
  {
      path: '',
      component: ListProvidersComponent,
      canActivate: [AdminGuard]
  }, 
  {
      path: 'edit-provider/:id',
      component: EditProviderComponent,
      canActivate: [AdminGuard]
  }, 
  {
      path: 'new-provider/:merchant_id',
      component: NewProviderComponent,
      canActivate: [AdminGuard]
  }, 
  {
      path: 'stores-warehouses/:merchant_id',
      component: StoresWarehousesComponent,
      canActivate: [AdminGuard]
  }, 
  {
      path: 'product-stock-update/:warehouse_id/:merchant_id',
      component: ProductoStockUpdateComponent,
      canActivate: [AdminGuard]
  },   
  {
      path: 'closeSession',
      component: CloseSessionComponent,
      canActivate: [AdminGuard]
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
