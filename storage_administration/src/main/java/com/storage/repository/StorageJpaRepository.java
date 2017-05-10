package com.storage.repository;

import com.storage.entities.Storage;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by admin on 29/04/2017.
 */
public interface StorageJpaRepository extends PagingAndSortingRepository<Storage, Long> {
}
