package com.storage.controller;

import com.storage.DAO.StorageDAO;
import com.storage.entities.ProductFormStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by admin on 08/05/2017.
 */
@RestController
public class FromStorageController {


    StorageDAO storageDAO;

    @Autowired
    public FromStorageController(StorageDAO storageDAO) {
        this.storageDAO = storageDAO;
    }

    @RequestMapping(path="/storage/{storageId}/products")
    public ResponseEntity<?> getProducts(@PathVariable int storageId){

        List<ProductFormStorage> rows=storageDAO.hepek(storageId);
        String storages="[";

        for(int i=0;i<rows.size();i++){
            if(i!=rows.size()-1)
                storages=storages + rows.get(i).getJson()+",";
            else
                storages=storages +rows.get(i).getJson();
        }
        storages=storages + "]";

         return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, HttpHeaders.CONTENT_TYPE)
                 .contentType(MediaType.APPLICATION_JSON)
                .body("{" +
                        "\"_embedded\": { " +
                            "\"storages\": " +
                                storages +
                            "}"+
                        "}"
                );

    }

}
