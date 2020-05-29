import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {

  isLoading = true
  isLoadingButton = false
  successMessage = false
  id: any
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


  constructor(private apiService:ApiService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const response = await this.apiService.getProvider(this.id);
    this.editProviderData.name = response.name
    this.editProviderData.taxId = response.taxId
    this.editProviderData.activity = response.activity
    this.editProviderData.email = response.email
    this.editProviderData.phoneNumber = response.phoneNumber
    this.editProviderData.address = response.address
    this.editProviderData.zipCode = response.zipCode
    this.editProviderData.description = response.description
    this.isLoading = false
  }



  async updateProvider(){
    this.isLoadingButton = true;
    const response = await this.apiService.updateProvider(this.id, this.editProviderData)
    this.isLoadingButton = false;
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3500);

  }

}
