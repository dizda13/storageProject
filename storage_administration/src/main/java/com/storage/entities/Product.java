package com.storage.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.ReadOnlyProperty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.sql.Timestamp;
import java.util.Date;


/**
 * Created by admin on 29/04/2017.
 */
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String name;

    @NotNull
    private Double price;

    @NotNull
    private Double length;

    @NotNull
    private Double width;

    @NotNull
    private Double height;

    @NotNull
    private Double weight;

    @ReadOnlyProperty
    private Timestamp createdAtTime;

    private Timestamp updateAtTime;

    protected Product() {
    }

    public Product(ProductFormStorage productFormStorage){
        this.name=productFormStorage.getName();
        this.price=productFormStorage.getPrice();
        this.height=productFormStorage.getHeight();
        this.weight=productFormStorage.getWeight();
        this.width=productFormStorage.getWidth();
        this.length=productFormStorage.getLength();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getLength() {
        return length;
    }

    public void setLength(Double length) {
        this.length = length;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(Double width) {
        this.width = width;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Timestamp getCreatedAtTime() {
        return createdAtTime;
    }

    public void setCreatedAtTime(Timestamp createdAtTime) {
        this.createdAtTime = createdAtTime;
    }

    public Timestamp getUpdateAtTime() {
        return updateAtTime;
    }

    public void setUpdateAtTime(Timestamp updateAtTime) {
        this.updateAtTime = updateAtTime;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAtTime=new Timestamp(new Date().getTime());
        this.updateAtTime=new Timestamp(new Date().getTime());
    }

    @PreUpdate
    protected void onUpdate(){
        this.updateAtTime=new Timestamp(new Date().getTime());
    }

}
