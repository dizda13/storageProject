package com.storage.controller;

import com.storage.entities.Product;
import com.storage.entities.ProductFormStorage;
import com.storage.entities.ProductStorageBridge;
import com.storage.repository.ProductJpaRepository;
import com.storage.repository.ProductStorageBridgeJpaRepository;
import com.storage.repository.StorageJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by admin on 09/05/2017.
 */
@RestController
public class AddToStorageController {

    ProductJpaRepository productJpaRepository;
    ProductStorageBridgeJpaRepository productStorageBridgeJpaRepository;
    StorageJpaRepository storageJpaRepository;

    @Autowired
    public AddToStorageController(ProductJpaRepository productJpaRespsitory, ProductStorageBridgeJpaRepository productStorageBridgeJpaRepository, StorageJpaRepository storageJpaRepository) {
        this.productJpaRepository=productJpaRespsitory;
        this.productStorageBridgeJpaRepository=productStorageBridgeJpaRepository;
        this.storageJpaRepository=storageJpaRepository;
    }

    @RequestMapping(path="/addProductToStorage/{storageId}", method = RequestMethod.POST)
    public ResponseEntity<?> addProductToStorage(@RequestBody ProductFormStorage productFormStorage, @PathVariable Long storageId){
        System.out.println("doslo");
        Product product=new Product(productFormStorage);
        productJpaRepository.save(product);
        productStorageBridgeJpaRepository.save(new ProductStorageBridge(storageJpaRepository.findOne(storageId),product, productFormStorage.getQuantity()));
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, HttpHeaders.CONTENT_TYPE)
                .contentType(MediaType.APPLICATION_JSON)
                .body(productFormStorage);
    }
}
