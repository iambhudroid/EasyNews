import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class StorageServiceService {
  storageList: Array<any> = [];
  storageArrayMap: Map<String, [Object]> = new Map<String, [Object]>();

  constructor(private storage: Storage) { }

  deleteStorageItem(key: string) { 
    if (this.storageArrayMap.has(key)) {
      this.storageArrayMap.delete(key);
       this.storage.set("MainAPP", JSON.stringify(this.storageArrayMap));
    }  
  }

  addStorageItem(key: string, value: any) { 
    if (this.storageArrayMap.has(key)) {
      this.storageArrayMap.delete(key);
    }
    this.storageArrayMap.set(key, value); 
    this.storage.set("MainAPP", JSON.stringify(this.storageArrayMap));
  }

  clearAllStorageItems() {
    this.storage.clear();
  }

  getAllStorageItems() { 
    return this.storageArrayMap;
  }
}
