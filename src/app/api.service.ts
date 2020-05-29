import { Injectable } from '@angular/core';
import api from "../app/utils";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor() { }

  async login_service(data){
    try {
      const headers = {
        "Content-Type": "application/json",
      }
      const response = await axios({
        url: `${api.api_multivende}/auth/local`,
        method: "POST",
        data: data,
        headers: headers
      });
      
      if(response.data.token){
        return response.data
      }else{
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
    


  }


  async getUserData(){    
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/users/me`,
        method: "GET",        
        headers: headers
      });
      
      if(response.data.token){
        return response.data
      }
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  
  
  async getProviders(merchant_id, page = 1){    
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/m/${merchant_id}/providers/p/${page}`,
        method: "GET",        
        headers: headers
      });
      
      if(response.status == 200){
        return response.data
      }
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  async getProvider(provider_id){    
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/providers/${provider_id}`,
        method: "GET",        
        headers: headers
      });
      
      if(response.status == 200){
        return response.data
      }
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  
  
  async updateProvider(provider_id, body){    
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/providers/${provider_id}`,
        data:body,
        method: "PUT",
        headers: headers
      });
      
      if(response.status == 200){
        return response.data
      }
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  async createProvider(merchant_id, body){    
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/m/${merchant_id}/providers`,
        data:body,
        method: "POST",
        headers: headers
      });
      return response.data
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  async removeProvider(provider_id){
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/providers/${provider_id}`,        
        method: "DELETE",
        headers: headers
      });
      
      return response.data
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  
  async getStoresAndWareHouses(merchant_id, page = 1){
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/m/${merchant_id}/stores-and-warehouses/p/${page}`,        
        method: "GET",
        headers: headers
      });
      
      return response.data
    } catch (error) {
      console.log("error", error)
      return false
    }
  }
  
  
  async uploadStock(warehouse_id, data){
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      const response = await axios({
        url: `${api.api_multivende}/api/product-stocks/stores-and-warehouses/${warehouse_id}/bulk-set`,        
        method: "POST",
        data: JSON.stringify(data),
        headers: headers
      });
      
      return response.data
    } catch (error) {
      console.log("error", error)
      return false
    }
  }


}
