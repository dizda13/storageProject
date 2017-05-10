package com.storage.repository;

import com.storage.entities.ProductStorageBridge;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by admin on 07/05/2017.
 */
public interface ProductStorageBridgeJpaRepository extends PagingAndSortingRepository<ProductStorageBridge, Long> {

    void deleteByProduct_Id(Long id);
}
