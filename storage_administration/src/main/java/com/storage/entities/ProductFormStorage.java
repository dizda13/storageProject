package com.storage.entities;

/**
 * Created by admin on 09/05/2017.
 */
public class ProductFormStorage extends Product {

    int quantity;

    public ProductFormStorage() {
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    
    public String getJson(){
        return  "{"
                + "\"id\":"+ getId() + ","
                + "\"createdAtTime\":" + "\"" + getCreatedAtTime() + "\"" + ","
                + "\"height\":" + getHeight() + ","
                + "\"length\":" + getLength() + ","
                + "\"name\":" + "\"" + getName() + "\"" + ","
                + "\"price\":" + getPrice() + ","
                + "\"updateAtTime\":" + "\"" + getUpdateAtTime() + "\"" + ","
                + "\"weight\":" + getWeight() + ","
                + "\"width\":" + getWidth() + ","
                + "\"quantity\":" + getQuantity()
                + "}";
    }
}
