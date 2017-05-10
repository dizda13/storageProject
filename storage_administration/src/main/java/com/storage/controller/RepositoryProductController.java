package com.storage.controller;

import com.storage.repository.ProductJpaRepository;
import com.storage.repository.ProductStorageBridgeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by admin on 09/05/2017.
 */
@RepositoryRestController
public class RepositoryProductController {

    ProductJpaRepository productJpaRepository;
    ProductStorageBridgeJpaRepository productStorageBridgeJpaRepository;

    @Autowired
    public RepositoryProductController(ProductJpaRepository productJpaRepository, ProductStorageBridgeJpaRepository productStorageBridgeJpaRepository) {
        this.productJpaRepository = productJpaRepository;
        this.productStorageBridgeJpaRepository = productStorageBridgeJpaRepository;
    }

    @RequestMapping(path="products/{id}", method= RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    @Transactional
    public void deleteProduct(@PathVariable Long id){
        productStorageBridgeJpaRepository.deleteByProduct_Id(id);
        productJpaRepository.delete(id);
    }


    @RequestMapping(path="productStorageBridges/{id}", method= RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    @Transactional
    public void deleteProductFromStorage(@PathVariable Long id){
        productStorageBridgeJpaRepository.deleteByProduct_Id(id);

    }

}
