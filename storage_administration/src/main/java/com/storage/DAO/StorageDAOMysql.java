package com.storage.DAO;

import com.storage.entities.ProductFormStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by admin on 08/05/2017.
 */
@Repository
public class StorageDAOMysql implements StorageDAO {

    private JdbcTemplate jdbcTemplate;
    private String getStorage="select p.id, " +
            "created_at_time AS createdAtTime, " +
            "p.height," +
            "p.length, " +
            "p.name," +
            "p.price, " +
            "p.update_at_time AS updateAtTime, " +
            "p.weight, " +
            "p.width , " +
            "product_storage_bridge.quantity" +
            " from product p join product_storage_bridge on product_id=p.id where storage_id=?";
    @Autowired
    public void init(@Qualifier("dataSource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    public List<ProductFormStorage> hepek(int storage_id){
        System.out.println("hepek");
         return jdbcTemplate.query(getStorage,new Object[]{storage_id}, new BeanPropertyRowMapper(ProductFormStorage.class));
    }
}
