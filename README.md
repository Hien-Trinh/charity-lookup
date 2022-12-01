# ComSci-IA


## Table of Contents

1. [Planning]()
2. [Design]()
3. [Development]()
5. [Functionality]()
6. [Apendix]()
7. [Citation]()


## Criteria A: Planning 

### Definition of Problem

Throughout the previous centuries, total giving – the amount of money that went to charitable purposes – accounted for around 2% of the GDP worldwide, and in 2017 it was a whopping $410.02 billion<sup>[[1]](https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=42)</sup>. Due to the high demand for charitable purposes, the demand for a tool to help people find charity organizations worldwide has risen. My client, an acquaintance, wants to be involved in the cause but finds it challenging to look for the right charity based on his preference.


### Proposed Solution

The web application will have a search engine that ultilizes the Global Giving organizations API to provide users with a list of global charities to find one that matches their philanthropic interests. Compared to an application, a web application is immediately accessible without need for installation and is compatible regardless of operating systems. This is useful as the majority of the program (database and API fetching) will run server-side.


#### Javascript

First, Javascript is a high-level programming language with simple syntax – similar to that of Python. As a result, it’s easy for other developers to understand and extend upon. Secondly, Javascript is the most popular programming language for web applications’ client-side behavior thanks to its abundance of third-party libraries<sup>[[2]](https://w3techs.com/technologies/details/cp-javascript/)</sup>, which provide a high level of abstraction to useful but complicated functionalities.


#### React and Next.js

Extensibility
React is an open-source Javascript framework for creating interactive UI. First introduced by Facebook (Meta) in 2013, it became one of the most popular JS frameworks for website development<sup>[[3]](https://reactjs.org)</sup>. 

Next.js is an open-source framework built with Node.js that adds functionalities such as server-side rendering, static websites, smart bundling, etc., for React-based websites<sup>[[4]](https://nextjs.org)</sup>.


#### CSS and Sass

Cascading Style Sheets (CSS) is a stylesheet language that determines the styles – position, size, color, etc. – of the content represented by HTML or XML<sup>[[5]](https://developer.mozilla.org/en-US/docs/Web/CSS)</sup>. 

Syntactically Awesome Style Sheets (Sass) is an extension of CSS that allows developers to use features such as variables, imports, etc.<sup>[[6]](https://www.w3schools.com/sass/sass_intro.php)</sup>.


#### Global Giving API

The Global Giving organization developed an Application Programming Interface (API) – software for applications to communicate with each other – that shares information about charity movements worldwide<sup>[[8]](https://www.globalgiving.org/api/)</sup>.


#### SQLite
MongoDB is a document database for non-relational database stored in JSON (Javascript Object Notation) format<sup>[[9]](https://www.interviewbit.com/blog/mongodb-vs-mysql/)</sup>. As my solution does not require relational database and is build using Javascript, it's more beneficial to use mongoDB for it's speed, scalability, and formatting instead of SQL database programs.


#### Vercel hosting service
Next.js defaults to Vercel hosting service, which handles the distribution of service worldwide. There are different hosting option but because the website renders mostly on client side, there's no need for extra bandwidth or other resources<sup>[[10]](https://vercel.com/pricing)</sup>.


### Success Criteria

1. Login system using email and password for securing user credentials.
2. Users can see a page heading containing the application name.
3. Search bar provides quick and easy access to a collection of charity organizations and their updates through Global Giving API.
4. Users can click the 'Search' button (or Enter) to display information cards for the matching organizations in a search results area.
5. Users can see organization information cards in the search results area containing name, title, and a short desciption:
6. The organization’s information card hyperlink opens a new tab on that organization’s home page.
7. The website allow users to quickly navigate to charities that are similar to those they have searched.
8. Users can see a page footer with links to your social media accounts, including social media icons (like the Instagram icon).


## Criteria B: Design

### Design Statement

The web application uses Javascript with frameworks such as React and Next.js as the scripting language, HTML as a markup language, and CSS with Sass and Tailwind CSS as a stylesheet language.


### Solution Sketch

![solution_sketch](https://user-images.githubusercontent.com/89367058/199765500-82652c68-8cf7-453b-a998-080384e1a398.png)

***Figure 1:*** Sketch of purposed solution's wireframe

***Fig.1*** is a wireframe showing a total of 4 screens - ```HomeScreen```, ```SearchResults```, ```LoginScreen```, and ```SignupScreen``` - connected via buttons.
- The ```LoginScreen``` and ```RegisterScreen``` are connected via the "Create one right now!"/"Login right now!" buttons.
- From the ```SingupScreen```, signing up will automatically send the user to the ```HomeScreen```.
- From the ```LoginScreen```, logging in will automatically send the user to the ```HomeScreen```.
- From the ```HomeScreen```, the user can enter a search term in the ***searchbar*** and click ***Search*** or ***Enter key*** to go to the ```ResultsScreen``` displaying the search results, or chose to login/logout by moving to the ```LoginScreen``` via ***User icon*** on the top right corner.
- From the ```ResultsScreen```, return to the ```HomeScreen``` via "CharityFinder"


### System Diagram

![SystemDiagram](https://user-images.githubusercontent.com/89367058/199881406-62dc1548-8be1-4e28-878d-ee77a29f4912.png)

***Figure 2:*** System Diagram for developer. Shows the input, output, internet, and the process in between.


### Flow Diagrams

![FlowDiagram_login](https://user-images.githubusercontent.com/89367058/199897033-98f0c9a9-c578-42a5-b458-fd4109a6bfce.png)

***Figure 3:*** Flow diagram of the Login funciton

### <br/>

![FlowDiagram_search](https://user-images.githubusercontent.com/89367058/199903237-9ed9f2fa-42c8-4d0a-bdfb-c538f588cad7.png)

***Figure 4:*** Flow diagram of the Search function


### Database ER Diagram

![DatabaseER](https://user-images.githubusercontent.com/89367058/203893228-0049cb27-cd7c-419d-9d3e-5c5d4d47b40c.png)

***Figure 3:*** ER diagram for the database. Visualized version of the database.

### Database Table (example)

**Table: Person**
| ID | name     | email                           | password                                                         |
|----|----------|---------------------------------|------------------------------------------------------------------|
| 1  | "Nagisa" | 2023.nagisa.sato@uwcisak.jp     | f5eea0a6fac31da36bd47ddb29987f8d735a27f430b20ff099ba54b4018caafd |
| 2  | "David"  | 2023.hien.minh.trinh@uwcisak.jp | 031117675a69578e401ce571634622476bf66cd5ea1faf9588f502eeeff90431 |

**Table: SearchHistory**
| ID | searchKey    | ownerID |
|----|--------------|---------|
| 1  | "China"      | 1       |
| 2  | "Pakistan"   | 1       |
| 3  | "water"      | 1       |
| 4  | "starvation" | 2       |
| 5  | "Bangladesh" | 2       |
| 6  | "Vietnam"    | 2       |


***Figure 4:*** User table with some examples.


### Record of Task

| Task No. | Task                                   | Planned outcome                                                          | Est. time | Est. completion date | Criteria |
|----------|----------------------------------------|--------------------------------------------------------------------------|-----------|----------------------|----------|
| 1        | Planning: meet with client             | identified the problem, success criteria, meeting schedule, etc.         | 45min     | Jul. 23              | A        |
| 2        | Planning: proposed solution            | solid idea of a proposed solution, sent to the client for confirmation   | 30min     | Aug. 20              | A        |
| 3        | Planning: rationale                    | researched and documented the cause for the proposed solution            | 45min     | Aug. 20              | A        |
| 4        | Design: solution sketch                | detailed wireframe of the website                                        | 20min     | Aug. 24              | B        |
| 5        | Design: system diagram                 | detailed system diagram of the website                                   | 30min     | Aug. 28              | B        |
| 6        | Planning: meet with client             | propose solution and plan, and receive feedback                          | 30min     | Sep. 5               | A        |
| 7        | Design: solution sketch update         | detailed wireframe of the website                                        | 30min     | Sep. 7               | B        |
| 8        | Development: home screen               | designed and stylized the landing page                                   | 1h        | Sep. 12              | C        |
| 9        | Development: search function           | implemented Global Giving API into the search bar                        | 1h30      | Sep. 12              | C        |
| 10       | Development: debugging search function | test various inputs and address for errors or unwanted results           | 3h        | Oct. 5               | C        |
| 11       | Planning: meet with client             | go through minimal viable product (search function) and address feedback | 1h15      | Oct. 12              | A        |
| 12       | Design: flow diagram – login function  | added flow diagram for login function                                    | 20min     | Oct. 20              | B        |
| 13       | Design: flow diagram – search function | added flow diagram for search function                                   | 20min     | Oct. 20              | B        |


### Test plan


## Criteria C: Development

### Tools
1. React framework
2. Next.js library
3. CSS, Sass stylesheet
4. Tailwind CSS library
5. Framer motion library
6. Database
7. MongoDB Atlas
8. Global Giving API
9. Guard clause


### Creating the UI

The UI (user interface) plays an important role in achieving the success criteria as it provides visuals and makes the interaction with the website’s function much more abstract, simpler. I chose the React framework because it supports OOP (object-oriented programming), which is highly compatible with the website. In addition, React integrates HTML into Javascript, which makes it easier to create dynamic webpages – website displays differently based on different conditions.


### Creating the database

As the client requested, the website must include a storage system that stores data on the server database. There is one table to classify the users. I used mongoDB atlast because it stores data on the server instead of locally.






## Citation
1. “Giving Statistics.” Charity Navigator, 2018, https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=42. Accessed 23 August 2022.
2. “Usage Statistics of JavaScript as Client-side Programming Language on Websites, August 2022.” W3Techs, 2022, https://w3techs.com/technologies/details/cp-javascript/. Accessed 22 August 2022.
3. “React – A JavaScript library for building user interfaces.” React, https://reactjs.org. Accessed 23 August 2022.
4. “Next.js by Vercel - The React Framework.” Next.js, https://nextjs.org. Accessed 23 August 2022.
5. “CSS: Cascading Style Sheets | MDN.” MDN Web Docs, 16 August 2022, https://developer.mozilla.org/en-US/docs/Web/CSS. Accessed 23 August 2022.
6. “Sass Introduction.” W3Schools, https://www.w3schools.com/sass/sass_intro.php. Accessed 23 August 2022.
8. “GlobalGiving API Documentation.” GlobalGiving, https://www.globalgiving.org/api/. Accessed 4 November 2022.
9. MongoDB vs mysql: Know the difference. InterviewBit. (2022, August 16). Retrieved November 4, 2022, from https://www.interviewbit.com/blog/mongodb-vs-mysql/.
10. “Pricing – Vercel.” Vercel, https://vercel.com/pricing. Accessed 4 November 2022.
