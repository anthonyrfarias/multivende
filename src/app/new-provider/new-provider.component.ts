import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.css']
})
export class NewProviderComponent implements OnInit {

  isLoadingButton = false
  merchant_id: any
  editProviderData = {
    name: <any> "",
    taxId: "",
    activity: "",
    email: "",
    phoneNumber: "",
    pais: "",
    address: "",
    zipCode: "",
    description: "",
  }

  constructor(private route: ActivatedRoute, private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.merchant_id = this.route.snapshot.paramMap.get('merchant_id');
    
  }

  async createProvider(){
    this.isLoadingButton = true
    const response = await this.apiService.createProvider(this.merchant_id, this.editProviderData)
    
    if(response){
      console.log(response)
      this.router.navigateByUrl(`/edit-provider/${response._id}`);
    }
    this.isLoadingButton = false
  }

}
