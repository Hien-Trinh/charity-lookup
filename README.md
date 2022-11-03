# ComSci-IA


## Table of Contents

1. [Planning]()
2. [Design]()
3. [Development]()
5. [Functionality]()
6. [Apendix]()
7. [Citation])


## Criteria A: Planning 

### Definition of Problem

Throughout the previous centuries, total giving – the amount of money that went to charitable purposes – accounted for around 2% of the GDP worldwide, and in 2017 it was a whopping $410.02 billion (“Giving Statistics”). Therefore, the demand for a tool to help people find charity organizations worldwide has risen. My client, an acquaintance, wants to be involved in the cause but finds it challenging to look for the right charity based on his preference.

### Proposed Solution

The web application utilizes the Global Giving organizations API to provide users with a list of global charities to find one that matches their philanthropic interests. It uses Javascript with frameworks such as React and Next.js as the scripting language, HTML as a markup language, and CSS with Sass and Tailwind CSS as a stylesheet language.

#### Python



#### Kivymd Library



#### SQLAlchemy and ORM

To operate the database, I choose to use SQLAlchemy. It's a declarative query language that is common for relational databases. Also, when identifying the issue and planning out the ER (Entity Relation) diagram and table, I noticed that classes have relation to each other. In this instance, a user has many shoes, and a shoe only has one user. In order to effectively address this, I choose to use an ORM (Object Relational Mapper) supported language, and among them, SQLAlchemy is highly compatible with Python that allows for Python construct<sup>[[4]](https://www.pythoncentral.io/overview-sqlalchemys-expression-language-orm-queries/)</sup>.

### Success Criteria

1. User is able to Add and Remove data in the table
2. User is able to Edit existing data
3. The application has a login and register page
4. The login information and database are secured and the password is hashed
5. Function to sort the table based on different factors
6. Follow good coding practises, which allow for future extensions by other developers
