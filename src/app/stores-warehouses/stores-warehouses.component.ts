import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from "../api.service";
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stores-warehouses',
  templateUrl: './stores-warehouses.component.html',
  styleUrls: ['./stores-warehouses.component.css']
})
export class StoresWarehousesComponent implements OnInit {
  isLoading = true
  stores = []
  faUpload = faUpload;
  merchant_id;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.merchant_id = this.route.snapshot.paramMap.get('merchant_id');
    const response = await this.apiService.getStoresAndWareHouses(this.merchant_id)
    
    if(response){
      this.stores = response.entries
    }
    this.isLoading = false

  }

}
