# Kitchen Story

## Project Background
Kitchen Story is an e-commerce portal that lets people shop for basic food items on their website.

## Run the application
Download or clone the content of repository. Then follow the instruction given below:

### Setup for frontend
1. Open the folder Frontend_Angular in VsCode.
2. Then Install node.js from https://nodejs.org/en/download/.
3. Then open cmd and paste: npm install -g @angular/cli
4. Then in cmd, paste: npm install
5. After installation, in cmd paste: ng serve --o

### Setup for backend
1. Open Eclipse Ide. import maven project Backend_SpringBoot.
2. Open the KitchenStoryApplication.java file. Right click and select run as java application.

### Setup for Database

1. **Install MySQL:**
   - Download and install MySQL from the official website: [MySQL Downloads](https://dev.mysql.com/downloads/installer/).

2. **Create Database:**
   - After installation, open the MySQL command line client or any MySQL GUI tool like MySQL Workbench.
   - Create a new database called `kitchenstory` with the following command:
     ```sql
     CREATE DATABASE kitchenstory;
     ```

3. **Create Tables:**
   - Create the necessary tables in the `kitchenstory` database. You can use the following SQL commands to create the tables:
     ```sql
     USE kitchenstory;

     CREATE TABLE AdminCred (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(50) NOT NULL,
         password VARCHAR(100) NOT NULL
     );

     CREATE TABLE Orders (
         id INT AUTO_INCREMENT PRIMARY KEY,
         fullName VARCHAR(100) NOT NULL,
         address VARCHAR(255) NOT NULL,
         email VARCHAR(100) NOT NULL,
         phone VARCHAR(20) NOT NULL,
         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         quantity INT NOT NULL,
         totalAmount DECIMAL(10, 2) NOT NULL,
         productIDs JSON NOT NULL
     );

     CREATE TABLE Products (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         description TEXT,
         price DECIMAL(10, 2) NOT NULL,
         quantity INT NOT NULL
     );
     ```

4. **Import Data:**
   - If you have CSV files for the collections, you can use MySQL Workbench or any other tool to import the data. Follow these steps:
     1. Open MySQL Workbench.
     2. Select your `kitchenstory` database.
     3. Right-click on the respective table (e.g., `AdminCred`, `Orders`, `Products`) and select `Table Data Import Wizard`.
     4. Follow the prompts to import the CSV file data into the table.

5. **Configure Spring Boot to Use MySQL:**
   - Update your `application.properties` file to configure the MySQL datasource:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/kitchenstory
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.show-sql=true
     spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
     ```

6. **Start Your Application:**
   - Run your Spring Boot application, and it should connect to the MySQL database `kitchenstory` and use the configured tables.


The web application is now ready to use in http://localhost:4200/
