package com.storage.repository;

import com.storage.entities.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by admin on 29/04/2017.
 */
public interface ProductJpaRepository extends PagingAndSortingRepository<Product, Long> {
}
