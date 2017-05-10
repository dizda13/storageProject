package com.storage;

import com.storage.entities.Product;
import com.storage.entities.ProductStorageBridge;
import com.storage.entities.Storage;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 * Created by admin on 09/05/2017.
 */
@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Storage.class);
        config.exposeIdsFor(Product.class);
        config.exposeIdsFor(ProductStorageBridge.class);
    }
}
