import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from "../api.service";
@Component({
    selector: 'app-producto-stock-update',
    templateUrl: './producto-stock-update.component.html',
    styleUrls: ['./producto-stock-update.component.css']
})
export class ProductoStockUpdateComponent implements OnInit {
  
    isLoadingButton = false
    warehouse_id: any
    merchant_id: any
    productos: any
    formatted = []
    invalidFormat = false
    resultados = []

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.merchant_id = this.route.snapshot.paramMap.get('merchant_id');
      this.warehouse_id = this.route.snapshot.paramMap.get('warehouse_id');
    }

    async cargaMasiva(){
      this.isLoadingButton = true
      let data1 = this.productos.split(/\r?\n/);
      for (let index = 0; index < data1.length; index++) {
        const element = data1[index];
        let item = element.split(":");
        if(item.length !== 2 || isNaN(item[1])){
          this.invalidFormat = true;
          setTimeout(() => {
            this.invalidFormat = false;
          }, 3500);
          break;
        }
        this.formatted.push({
          code: item[0],
          amount: item[1],
        })
      }

      const response = await this.apiService.uploadStock(this.warehouse_id, this.formatted)
      this.resultados = response
      this.formatted = []
      this.isLoadingButton = false
    }

}
