create database react_crud;
use react_crud;

create table users (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(60),
    email varchar(60),
    mobile varchar(12),
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    modified_at timestamp DEFAULT CURRENT_TIMESTAMP
);