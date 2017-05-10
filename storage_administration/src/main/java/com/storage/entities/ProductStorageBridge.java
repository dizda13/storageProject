package com.storage.entities;

import javax.persistence.*;

/**
 * Created by admin on 07/05/2017.
 */
@Entity
public class ProductStorageBridge {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn
    private Storage storage;

    @ManyToOne
    @JoinColumn
    private Product product;

    private int quantity;

    public ProductStorageBridge() {
    }

    public ProductStorageBridge(Storage storage, Product product, int quantity) {
        this.storage = storage;
        this.product = product;
        this.quantity = quantity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Storage getStorage() {
        return storage;
    }

    public void setStorage(Storage storage) {
        this.storage = storage;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
