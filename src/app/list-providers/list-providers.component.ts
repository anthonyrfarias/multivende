import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.css']
})
export class ListProvidersComponent implements OnInit {
  isLoading = true
  providers = []
  faEdit = faEdit;
  faTimes = faTimes;
  merchant_id;
  constructor(private apiService: ApiService) {    
  }

  
  
  async ngOnInit() {
    const response = await this.apiService.getUserData()
    this.merchant_id = response.Merchants[0]._id;
    await this.loadList()
    this.isLoading = false
  }

  async removeProvider(provider_id){
    this.isLoading = true
    await this.apiService.removeProvider(provider_id)
    await this.loadList()
    this.isLoading = false
  }

  async loadList(){
    const providersList = await this.apiService.getProviders(this.merchant_id)
    this.providers = providersList.entries
  }

}
