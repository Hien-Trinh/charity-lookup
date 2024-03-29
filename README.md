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

React is an open-source Javascript framework for creating interactive UI. First introduced by Facebook (Meta) in 2013, it became one of the most popular JS frameworks for website development<sup>[[3]](https://reactjs.org)</sup>. 

Next.js is an open-source framework built with Node.js that adds functionalities such as server-side rendering, static websites, smart bundling, etc., for React-based websites<sup>[[4]](https://nextjs.org)</sup>.

Although frameworks like Next.js are just tools to assist the developers, they're useful to the client due to its extensibility. Because they've become fundamental in the software development community, many programmers are familiar with the frameworks and can easily develope upon it. On the other hand, it's possible to not use frameworks and create a software with the same functionalities, however, this is not ideal because of lack of readability and extensibility.

Next.js, in comparision to its competitors such as Angular and Vue, excels due to faster page load and more efficient data caching<sup>[[5]](https://enlear.academy/next-js-vs-angular-whos-the-ultimate-winner-of-the-frontend-development-a3ee82a6da41)</sup>. Because my solution relies heavily on data transmition, an overall faster performing website would improve user experience and reducing unnecessary traffic.


#### Global Giving API

The Global Giving organization developed an Application Programming Interface (API) – software for applications to communicate with each other – that shares information about charity movements worldwide<sup>[[6]](https://www.globalgiving.org/api/)</sup>.


#### SQLite
To operate the database, I choose to use SQLite. It's a declarative query language that is common for relational databases. Also, when identifying the issue and planning out the ER (Entity Relation) diagram and table, I noticed that classes have relation to each other. In this instance, a user has many search history items and favorites. Compared to its competitors such as MySQL, SQLite is severless, meaning that it stores the database locally on only the host machine, resulting in higher security against data leaks<sup>[[7]](https://www.thinkautomation.com/our-two-cents/sqlite-pros-and-cons-a/)</sup>.


#### Vercel hosting service
Next.js defaults to Vercel hosting service, which handles the distribution of service worldwide. There are different hosting option but because the website renders mostly on client side, there's no need for extra bandwidth or other resources<sup>[[8]](https://vercel.com/pricing)</sup>.


### Success Criteria

1. Login system using email and password to save user preferences and history.
2. Search bar provides quick and easy access to a collection of charity projects through Global Giving API.
3. Users can see projects information cards in the search results area containing: title, short summary, and image
4. The organization’s information card hyperlink opens a new tab on that organization’s home page.
5. Function allowing users to continue their latest previous search.
6. Function allowing users to save search results and access them from the main page.
7. Users can save their "Favorites" collection to PDF


## Criteria B: Design

### Design Statement

The web application uses Javascript with frameworks such as React and Next.js as the scripting language, HTML as a markup language, and CSS with Sass and Tailwind CSS as a stylesheet language.


### Solution Sketch

![solution_sketch](https://user-images.githubusercontent.com/89367058/205923817-f3414fb8-7560-4675-bc45-6c0e8293effa.png)

***Figure 1:*** Sketch of purposed solution's wireframe

***Fig.1*** is a wireframe showing a total of 5 screens - ```HomeScreen```, ```SearchResults```, ```FavoritesScreen```, ```LoginScreen```, and ```SignupScreen``` - connected via buttons.
- The ```LoginScreen``` and ```RegisterScreen``` are connected via the "Create one right now!"/"Login right now!" buttons.
- From the ```SingupScreen```, signing up will send the user to the ```LoginScreen```.
- From the ```LoginScreen```, logging in will automatically send the user to the ```HomeScreen```.
- From the ```HomeScreen```, the user can enter a search term in the ***searchbar*** and click ***Search*** or ***Enter key*** to go to the ```ResultsScreen``` displaying the search results.
- From the ```HomeScreen```, the user can select to continue their previous search via ```Last search``` or view their favorites projects collection via ```Favorites```.
- From the ```HomeScreen```, the user can login/logout by moving to the ```LoginScreen``` via ***Login/Logout*** on the top right corner.
- From the ```ResultsScreen``` or the ```FavoritesScreen```, return to the ```HomeScreen``` via a back-arrow icon.


### System Diagram

![SystemDiagram](https://user-images.githubusercontent.com/89367058/206381576-ef11ab92-5165-4c53-afcc-bad3b88f8be4.png)

***Figure 2:*** System Diagram for developer. Shows the input, output, internet, and the process in between.


### Flow Diagrams

![FlowDiagram_login](https://user-images.githubusercontent.com/89367058/199897033-98f0c9a9-c578-42a5-b458-fd4109a6bfce.png)

***Figure 3:*** Flow diagram of the Login funciton

### <br/>

![FlowDiagram_search](https://user-images.githubusercontent.com/89367058/199903237-9ed9f2fa-42c8-4d0a-bdfb-c538f588cad7.png)

***Figure 4:*** Flow diagram of the Search function

### <br/>

![FlowDiagram_favorites](https://user-images.githubusercontent.com/89367058/206427106-2b959621-190d-4348-95da-40e85c4beece.png)

***Figure 5:*** Flow diagram of the Favorites page


### Database ER Diagram

![DatabaseER](https://user-images.githubusercontent.com/89367058/205541863-d2811fb8-1655-4396-a57b-19265af01b7a.png)

***Figure 6:*** ER diagram for the database. Visualized version of the database.

### Database Table (example)

**Table: Person**
| ID | name     | email                           | password                                                         |
|----|----------|---------------------------------|------------------------------------------------------------------|
| 1  | "Nagisa" | 2023.nagisa.sato@uwcisak.jp     | f5eea0a6fac31da36bd47ddb29987f8d735a27f430b20ff099ba54b4018caafd |
| 2  | "David"  | 2023.hien.minh.trinh@uwcisak.jp | 031117675a69578e401ce571634622476bf66cd5ea1faf9588f502eeeff90431 |

***Figure 7:*** User table with some examples.


**Table: SearchHistory**
| ID | searchKey    | ownerID |
|----|--------------|---------|
| 1  | "China"      | 1       |
| 2  | "Pakistan"   | 1       |
| 3  | "water"      | 1       |
| 4  | "starvation" | 2       |
| 5  | "Bangladesh" | 2       |
| 6  | "Vietnam"    | 2       |

***Figure 8:*** SearchHistory table with some examples.


**Table: Favorite**
| ID | charityId | charityTitle                                         | charitySummary                                                                                                                    | charityImageUrl                                    | charityUrl                       | ownerId |
|----|-----------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------------------------------|---------|
| 1  | 13517     | 'Orphans into loving foster families in China'       | 'In China, there are an estimated 90,000+ children growing up in government orphanages, the majority of whom have disabilities.   | 'https://www.globalgiving.org/pfil/13517/pict.jpg' | 'http://www.careforchildren.com' | 1       |
| 2  | 57172     | 'Pakistan Humanitarian Crises: Flood Emergency 2022' | 'Over 35 Million humans are affected by Flooding across Pakistan since June 2022. Severe Health risks along with food insecurity. | 'https://www.globalgiving.org/pfil/57172/pict.jpg' | 'http://www.facespakistan.org'   | 1       |

***Figure 9:*** Favorite table with some examples.


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
| 14       | Development: login/signup screens      | designed and stylized the login and signup screens                       | 1h30      | Nov. 1               | C        |
| 15       | Development: create databases          | created Person, SearchHistory, and Favorite databases                    | 30min     | Nov. 3               | C        |
| 16       | Development: database fetching APIs    | built APIs to fetch information from the database                        | 2h        | Nov. 3               | C        |
| 17       | Development: database inputing APIs    | built APIs to input information into the database                        | 1h30      | Nov. 8               | C        |
| 18       | Development: password hash function    | created function for hashing password in signup                          | 20min     | Nov. 9               | C        |
| 19       | Development: password verify function  | created function for verifying password in login                         | 20min     | Nov. 9               | C        |
| 20       | Development: signup API                | built API for signup function                                            | 30min     | Nov. 13              | C        |
| 21       | Development: login API                 | built API for login function with tools such as cookies and jwt          | 1h30      | Nov. 13              | C        |
| 22       | Development: authentication API        | built API for authenticating the user's login status to secure data      | 1h        | Nov. 15              | C        |
| 23       | Development: routing pages function    | created callback function that routes the user to desired pages          | 30min     | Nov. 15              | C        |
| 24       | Development: debugging authentication  | test login/signup system and data flow for unexpected behaviors          | 3h        | Nov. 18              | C        |
| 25       | Planning: meet with client             | review success criteria, show functionality of the login/signup system   | 1h        | Nov. 20              | C        |
| 26       | Design: solution sketch update         | detailed wireframe of the website                                        | 30min     | Nov. 20              | B        |
| 27       | Development: Last search function      | created function that continues the last recorded search in the history  | 30min     | Nov. 26              | C        |
| 28       | Development: Favorite function         | created function that adds charity projects into the database            | 45min     | Nov. 30              | C        |
| 29       | Development: Favorite screen           | made a screen listing the user's saved charity projects                  | 1h15      | Nov. 30              | C        |
| 30       | Development: Export to PDF function    | created function that exports the user's favorite collection as PDF      | 2h        | Dec. 4               | C        |


### Test plan

| Testing level    | Type of Testing                     | Success Criteria                                                                                                                                                                            | Procedure                                                                                                                                                                                                                                                                                                                                           | Success |
|------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Unit testing     | Login system test                   | User is able to log in after typing the correct email and password                                                                                                                          | In the Login screen, type "david@test" into the ***email input***, "david" into the ***password input***, and press the ***Login*** button.                                                                                                                                                                                                         | Yes     |
| Unit testing     | Login system test                   | User is unable to log in if either or both inputs are empty, or after typing the incorrect email or password. Instead, a message will appear, indicating the error.                         | In the Login screen, leave the text fields blank and press ***Login*** button. Then, type an incorrect email into the ***email input***, anything into the ***password input***, and press the ***Login*** button. Then, type "david@test" into the ***email input***, anything (but "david") into the ***password input***, and press ***Login***. | Yes     |
| Unit testing     | Register system test                | User is able to register a new account with a new email address                                                                                                                             | In the Register screen, type anything into the ***name input***, "newuser@test" into the ***email input***, "password" into the ***password input***, and press the ***Register*** button.                                                                                                                                                          | Yes     |
| Unit testing     | Register system test                | User is unable to register a new account if any or all inputs are empty, or have the same email address as an existing account. Instead, a message will appear, indicating the error.       | In the Register screen, leave the text fields blank and press ***Login*** button. Then, type anything into the ***username input***, "david@test" into the ***email input***, "password" into the ***password input***, and press the ***Register*** button.                                                                                        | Yes     |
| Unit testing     | Search function test                | When a search key is provided in the search bar and ran, the website redirects to results page with a list of projects related to the key. If no result is found, show "no results" message | In any screen with a search bar, type anything into the ***search bar*** and press the Enter key or ***Search*** button.                                                                                                                                                                                                                            | Yes     |
| Unit testing     | Search function test                | When no search key is provided in the search bar and ran, the user is redirected to Home screen. If already in Home scree, does nothing.                                                    | In any screen with a search bar, type nothing into the ***search bar*** and press the Enter key or ***Search*** button.                                                                                                                                                                                                                             | Yes     |
| Unit testing     | Last Search function test           | When the user is logged in and the ***Last Search*** button is pressed, the website redirects to results page based on the last search key.                                                 | In the Home screen, make sure user is logged in and press ***Last Search***.                                                                                                                                                                                                                                                                        | Yes     |
| Unit testing     | Last Search function test           | When the user is not logged in and the ***Last Search*** button is pressed, the website redirects to Login screen.                                                                          | In the Home screen, make sure no one is logged in and press ***Last Search***.                                                                                                                                                                                                                                                                      | Yes     |
| Unit testing     | Favorites function test             | When the user is logged in and the ***Favorites*** button is pressed, the website redirects to Favorites screen with the user's saved charity projects.                                     | In the Home screen, make sure user is logged in and press ***Favorites***.                                                                                                                                                                                                                                                                          | Yes     |
| Unit testing     | Favorites function test             | When the user is not logged in and the ***Favorites*** button is pressed, the website redirects to Login screen.                                                                            | In the Home screen, make sure no one is logged in and press ***Favorites***.                                                                                                                                                                                                                                                                        | Yes     |
| Integration test | The app GUI functions               | The transition between pages is correct and there are no unaccounted for visual bugs.                                                                                                       | Check all the pages, transition and visual content                                                                                                                                                                                                                                                                                                  | Yes     |
| Code review      | Error/bugs and code efficiency test | No errors/exit messages/syntax/bugs                                                                                                                                                         | If all the Unit test worked, the criteria is met                                                                                                                                                                                                                                                                                                    | Yes     |
| Software review  | All system test                     | The program runs flawlessly throughout                                                                                                                                                      | If all the Unit test worked and the success criteria in Planning are met, the criteria is met                                                                                                                                                                                                                                                       | Yes     |


## Criteria C: Development

### Tools

**List of techniques**

1. React framework + Next.js library
2. CSS, Sass stylesheet + Tailwind CSS library
3. SQLite database management
4. Global Giving API
5. Authorization cookie
6. JSON Web Tokens
7. bcrypt hash
8. API
9. Guard clause


**References for the sources

1. Stackoverflow – various bug fixes
2. Github – various bug fixes
3. [Next.js Tutorial - Part 6 | Authentication for API Routes using JWT and bcrypt](https://www.youtube.com/watch?v=j4Tob0KDbuQ&ab_channel=BrunoAntunes)
4. [Next.js Tutorial - Part 7 | Consume Authenticated APIs with cookies](https://www.youtube.com/watch?v=sxwCxmKhhas&t=874s&ab_channel=BrunoAntunes)
5. [Next.js Documentation](https://nextjs.org/)
6. [Global Giving API Documentation](https://www.globalgiving.org/api/)
7. [jsPDF Documentation](https://github.com/parallax/jsPDF)


### Creating the UI

The UI (user interface) plays an important role in achieving the success criteria as it provides visuals and makes the interaction with the website’s function much more abstract and straightforward. I chose the React framework because it integrates HTML into Javascript, which makes it easier to create dynamic webpages – website displays differently based on different conditions.

``` js
// ./components/Card.js

export default function Card({ login }) {

    ...
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>{login ? "Login" : "Sign Up"}</div>
            {message ? <div className={styles.message}>{message}</div> : null}
            <input
                type="text"
                placeholder="email"
                className={styles.inputField}
                ref={emailRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick()
                    }
                }}
            />
            {login ? null : (
                <input
                    type="text"
                    placeholder="name"
                    className={styles.inputField}
                    ref={nameRef}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleClick()
                        }
                    }}
                />
            )}
            <input
                type="password"
                placeholder="password"
                className={styles.inputField}
                ref={passwordRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick()
                    }
                }}
            />
            <button className={styles.button} onClick={handleClick}>
                {login ? "Login" : "Sign Up"}
            </button>
            {login ? (
                <Link href="./signup">
                    <div className={styles.link}>Create a new account.</div>
                </Link>
            ) : (
                <Link href="./login">
                    <div className={styles.link}>Already have an account?</div>
                </Link>
            )}
        </div>
    )
}

```

***Figure 10:*** Code segment of the ```Card``` component in the ```LoginScreen``` and ```SignupScreen```.


In ***figure 10***, ```Card()``` is a rendering function that returns the HTML for the ```Card``` component. Because the HTML and CSS of the ```LoginScreen``` and the ```SignupScreen``` are similar, I chose to create a dynamic component that changes in response to the boolean ```login``` prop passed into the function, which indicates whether the ```Card``` should be for login or signup. For instance, if ```login``` is true, the title will be "Login" and the input field for the name will disappear. On the other hand, if ```login``` is false, the title is "Sign Up" and the name field appears. The disadvantage of using a single dynamic component is the complexity of the code. However, the advantages are:
- Changes in formatting and styles (HTML and CSS) apply to both, saving the developer’s time from repeating the changes multiple times.
- Improve code readability and accessibility. Referring to ***figure 11*** and ***figure 12*** below, the ```Card``` component is imported and called in ```login()``` and ```signup()```.

``` js
// ./pages/login.js

import Card from '../components/Card';

export default function Login() {
    return (
        <Card login={true}></Card>
    )
}

```

***Figure 11:*** ```Login()``` renders the ```LoginScreen```.


```js
// ./pages/signup.js

import Card from "../components/Card"

export default function Signup() {
    return (
        <Card login={false}></Card>
    )
}

```

***Figure 12:*** ```Signup()``` renders the ```SignupScreen```.


### Creating the database

The client requested that the website save the users' search history and favorite collections. Therefore, I include a storage system that stores data on the server database. There is one table for the users' login information, one for the search history, and one for the favorite collection.


``` sql
-- ./migrations/001-initial.sql

-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE SearchHistory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    searchKey TEXT NOT NULL,
    ownerId INTEGER REFERENCES Person(id)
);

CREATE TABLE Favorite (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    charityId INTEGER UNIQUE NOT NULL,
    charityTitle TEXT NOT NULL,
    charitySummary TEXT NOT NULL,
    charityImage TEXT NOT NULL,
    charityUrl TEXT NOT NULL,
    ownerId INTEGER REFERENCES Person(id)
);

-- Down
DROP TABLE Person;
DROP TABLE SearchHistory;
DROP TABLE Favorite;
```

***Figure 13:*** SQLite to create and delete data tables for ```Person```, ```SearchHistory```, and ```Favorite```.


The SQLite commands in ***figure 13*** are for creating empty tables with assigned columns and dropping (deleting) their previous iteration.


``` js
// ./database-initiate.js

// import sqlite and sqlite3
const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

// open the database
async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

// initiate the database
async function init() {
    const db = await openDb()
    await db.migrate({ force: "last", migrationsPath: "../migrations" })
    // force: "last" will force the database to migrate to the latest version
    // migrationsPath: "../migrations" will migrate the database to the latest version

    const Person = await db.all("SELECT * FROM Person")
    console.log(JSON.stringify(Person, null, 2))

    const SearchHistory = await db.all("SELECT * FROM SearchHistory")
    console.log(JSON.stringify(SearchHistory, null, 2))

    const Favorite = await db.all("SELECT * FROM Favorite")
    console.log(JSON.stringify(Favorite, null, 2))
}

// call the function
init()

```

***Figure 14:*** JS code runs the SQLite commands in ***figure 13***.

I created ```database-initiate.js``` and ```001-initial.sql``` specifically for development purposes to test the database. In the production build, I would change the ```DROP TABLE``` command to something along the lines of ```ALTER TABLE``` to migrate the data rather than deleting them. This is because other developers or I may wish to migrate the database with all the data due to version updates or changes to existing tables in the future.


### Login

**How would the website know if the user is logged in?**

The first phase is to verify if the user exists and tell the website who they are. However, because the login information is sent via the Internet to the server, encrypting that information is vital to protect it. Therefore, I chose to use JWT (JSON Web Token) – an encrypted claim used to secure information transmission. That’s why the second phase has to authenticate the JWT to know who the user is before granting them access to certain features such as “Last search” and “Favorites”.


**Login API**

Although it’s possible in NEXT.js to run both server-side and static site generation on the same page, I chose to separate the server-side function into an API (Application Programming Interface) – a software used for communication between programs – to improve code readability and accessibility.


``` js
// ./pages/api/login.js

// import libraries
import { compare } from "bcrypt"        // for verifying hashed password
import { sign } from "jsonwebtoken"     // for JWT
import cookie from "cookie"             // for cookie

// import sqlite and sqlite3
const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")

// open the database
async function openDb() {
    return sqlite.open({
        filename: "../database.sqlite",
        driver: sqlite3.Database,
    })
}

// login API function
export default async function login(req, res) {
    const db = await openDb()

    // check if the request method is POST
    if (req.method === "POST") {
        // check if the email and password are provided
        const person = await db.get("SELECT * FROM Person WHERE email = ?", [
            req.body.email,
        ])

        if (!person) {
            res.status(401).json({ message: "Wrong email or password", success: false })
            return
        }

        // verify the password
        compare(
            req.body.password,
            person.password,
            async function (err, result) {
                if (!err && result) {
                    // create a JWT
                    const claims = {
                        sub: person.id,
                        myPersonEmail: person.email,
                    }

                    // sign the JWT, set to expire in 1 hour
                    const jwt = sign(claims, "" + process.env.auth_secret, {
                        expiresIn: "1h",
                    })

                    // set the cookie with the JWT in the response header
                    res.setHeader(
                        "Set-Cookie",
                        cookie.serialize("auth", jwt, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== "development",
                            sameSite: "strict",
                            maxAge: 3600,
                            path: "/",
                        })
                    )
                    res.json({ message: "Login success", success: true })
                } else {
                    res.json({ message: "Login failed", success: false })
                }
            }
        )
    } else {
        res.status(405).json({ message: "We only support POST", success: false })
    }
}

```

***Figure 15:*** ```login()``` validates the user's login information by cross-checking with the database and assigning a JWT as a cookie upon success.


In ```figure 15```, ```login()``` receives an HTTP request when the user submits their login information from the ```LoginScreen``` that includes the email and password inputted. The expected response should either log the user in or show an “incorrect email or password” error.

To know whether the user inputted the correct email and password, they had to be checked with the database. When I made the Signup API, I used the bcrypt library to hash the password before storing it in the database. Therefore, I use bcrypt’s ```compare()``` to verify the two passwords. If ```compare()``` returns success, it will run a callback function that processes the user’s ID and email into a JWT using jsonwebtoken’s ```sign()```. When signing the JWT, I also included two optional parameters to increase security further:
- Private key: stored as an environment variable outside of the program, which is impossible to access through the website.
- Expire time of 1 hour: each login period last for 1 hour, preventing accidental situations where the user forgets to log out, resulting in their data getting stolen.

```sign()``` returns a string containing the JWT, which is stored in the response header as the “auth” cookie. The benefit is that since the cookie is attached to all of the user’s HTTP requests, the website can read the cookie and recognize who the user is through the authentication API.


**Authentication API**

Personalized functions “Last search” and “Favorites” are wrapped in an API that authenticates the cookie inside the user’s HTTP request.


``` js
// ./pages/api/authenticate.js

import { verify } from "jsonwebtoken"

export const authenticated = (fn) => async (req, res) => {
    // verify auth token
    verify(
        req.cookies.auth,
        "" + process.env.auth_secret,
        async function (err, decoded) {
            // If authenticated, return the function
            if (!err && decoded) {
                return await fn(req, res)
            }

            // If not authenticated, return 401
            res.status(401).json({ message: "Sorry you are not authenticated", success: false })
        }
    )
}

```

***Figure 16:*** ```authenticated()``` verifies the user request's cookie.


In ***figure 16***, ```authenticated()``` takes ```fn(req, res)``` as a parameter –  “Last search” or “Favorites” function – then uses jsonwebtoken’s ```verify()``` to decode the cookie. If the cookie isn’t there or is invalid, the program prevents ```fn()``` from running. Other than that, ```fn()``` runs.

However, a problem arises when the website tries to fetch from the database but is blocked by ```authenticated()``` throwing the 401 error – missing or invalid JWT. This is problematic because the page will be blank, and an error popup will appear. My first instinct was to prevent the user from accessing the page from the “Favorites” button in ```HomeScreen``` and instead redirect them to ```LoginScreen```.


``` js
// ./pages/index.js

export default function Home({ cookie }) {

    ...
    
    async function handleFavorite() {
        const url = `/api/person/${cookie}/getFavoriteById`

        const allFavorite = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }).then((res) => res.json())

        if(allFavorite.success === false) {
            Router.push({
                pathname: "../login",
            })
        } else {
            Router.push({
                pathname: "../favorites",
            })
        }
    }
    
    ...
    
```

***Figure 17:*** ```handleFavorite()``` runs when the user presses "Favorites" button.


```handleFavorite()``` figure 17 uses the ```getFavoriteById``` API to fetch the user’s saved projects. Because the API is wrapped in ```authenticated()```, if an error occurs, ```allFavorite = { message: "Sorry you are not authenticated", success: false }```, which I can put in an if-statement to handle the unauthorized user. However, the user will see an error if they directly access the ```FavoritesScreen```.

Therefore for the second attempt, I included a guard clause in ```getServerSideProps()``` – function fetches data before the page is rendered –  to route the user to the ```LoginScreen``` if there is an error.


``` js
// ./pages/favorites.js

export async function getServerSideProps(ctx) {
    const auth = await isLoggedIn(ctx)
    const url = `http://localhost:3000/api/person/${auth}/getFavoriteById`
    const allFavorite = await myGet(url, ctx)

    if (allFavorite.success === false) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        }
    }

    return {
        props: {
            allFavorite,
        },
    }
}

```

***Figure 18:*** ```getServerSideProps()``` fetches the data to populate the page's HTML.


In ***figure 18***, the ```redirect``` object is passed when authentication is unsuccessful, which redirects the user to the ```LoginScreen```. This solution is better than the previous one because it accounts for the user going to ```FavoritesScreen``` directly.


### UI Screenshots

![Screen Shot 2022-12-09 at 18 42 30](https://user-images.githubusercontent.com/89367058/206672953-dd8413b3-e877-4364-950b-f21d5539ac02.png)

***Figure 19:*** Screenshot of the Home screen.

### <br/>

![Screen Shot 2022-12-09 at 18 42 37](https://user-images.githubusercontent.com/89367058/206672964-1cf12272-b3d8-410b-8e9a-23c293527e78.png)

***Figure 20:*** Screenshot of the Login screen.

### <br/>

![Screen Shot 2022-12-09 at 18 42 42](https://user-images.githubusercontent.com/89367058/206672968-33899635-4101-4e07-877f-f3548b81770c.png)

***Figure 21:*** Screenshot of the Signup screen.

### <br/>

![Screen Shot 2022-12-09 at 18 43 12](https://user-images.githubusercontent.com/89367058/206672973-22e438f8-dca2-4960-a8f9-e573a212ff8b.png)

***Figure 22:*** Screenshot of the Search screen.

### <br/>

![Screen Shot 2022-12-09 at 18 43 30](https://user-images.githubusercontent.com/89367058/206672975-93ac33d9-e640-4950-900e-f584d35e2f31.png)

***Figure 23:*** Screenshot of the Favorites screen.

### <br/>

## Criteria D: Functionality

### Video

https://user-images.githubusercontent.com/89367058/206672423-497178a0-e605-44dd-b6fe-529e0e0b743d.mp4


## Appendix

### Client's statement

![Screen Shot 2022-12-08 at 17 47 04](https://user-images.githubusercontent.com/89367058/206400928-bd95beb1-60df-4fc0-91ce-ffdff2f50dfa.png)

# Charity Finder

With the Charity Finder app you'll not only get to refine your Web Developer skills, but you will also have an opportunity to see how you can do good. The objective of this app is to utilize the [Global Giving](https://www.globalgiving.org/) organizations API to provide your users with a list of global charities they can search to find a charity that matches their philanthropic interests.

### Constraints

- Since the app is asking the user to choose and contribute to a charitable
  cause it's important that the presentation of information be clear and concise.
  Just as important is the need for the UI/UX to be polished and engaging to use.

## User Stories

- [ ] User can see a page heading containing the application name.
- [ ] User can see an overview of what the app is intended for in 'splash'
      page format.
- [ ] User can see a search area containing an set of drop down boxes that
      allow the user to specify search criteria for charitable organizations
      including:

      - Organization name
      - Organizations home country
      - Countries the organization serves
- [ ] User can see a 'Search' button
- [ ] User can click on the 'Search' button to display information cards
      for the matching organizations in a search results area.
- [ ] User can see organization information cards in the search results area
      containing:

      - ID
      - Name
      - Address
      - Logo
- [ ] User can click the logo in the organizations information card to open a
      new window to that organizations home page.
- [ ] User can see a page footer with links to your social media
      accounts including social media icons (like the Twitter icon).

## Bonus features

- [ ] User can see a search dropdown for themes the charity focuses on.
- [ ] User can select multiple options in the search dropdowns.
- [ ] User can see a project link (e.g. 'PROJECT') on the organization
      information card.
- [ ] User can click on the project link to display a page with information
      describing the Global Giving project the organization is associated with.
      Hint: examine the structure of the JSON returned from the API to understand
      the relationship between projects and organizations.

## Useful links and resources

- [Global Giving API](https://www.globalgiving.org/api/)
- Sample XML for a project returned through the API:

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<projects numberFound="26842">
    <hasNext>true</hasNext>
    <nextProjectId>367</nextProjectId>
    <project>
        <active>false</active>
        <activities>To fund the training of health professionals including nurses, psychologists, and social workers, and buy medicine and equipment.</activities>
        <additionalDocumentation>https://www.globalgiving.org/pfil/359/projdoc.doc</additionalDocumentation>
        <approvedDate>2004-06-01T12:43:27-04:00</approvedDate>
        <contactAddress>28 Pine Street</contactAddress>
        <contactCity>Mechanic Falls</contactCity>
        <contactCountry>United States</contactCountry>
        <contactPostal>04256</contactPostal>
        <contactState>Maine</contactState>
        <contactUrl>http://groups.yahoo.com/group/FOCUSonCambodia</contactUrl>
        <country>Cambodia</country>
        <funding>8239.33</funding>
        <goal>55000.00</goal>
        <id>359</id>
        <image id="0">
            <imagelink size="small">
                <url>https://www.globalgiving.org/pfil/359/pict_grid1.jpg</url>
            </imagelink>
            <imagelink size="thumbnail">
                <url>https://www.globalgiving.org/pfil/359/pict_thumbnail.jpg</url>
            </imagelink>
            <imagelink size="medium">
                <url>https://www.globalgiving.org/pfil/359/pict_med.jpg</url>
            </imagelink>
            <imagelink size="large">
                <url>https://www.globalgiving.org/pfil/359/pict_grid7.jpg</url>
            </imagelink>
            <imagelink size="extraLarge">
                <url>https://www.globalgiving.org/pfil/359/pict_large.jpg</url>
            </imagelink>
            <imagelink size="original">
                <url>https://www.globalgiving.org/pfil/359/pict_original.jpg</url>
            </imagelink>
            <title>Improving the Health of Children in Cambodia</title>
        </image>
        <imageGallerySize>1</imageGallerySize>
        <imageLink>https://www.globalgiving.org/pfil/359/pict.jpg</imageLink>
        <iso3166CountryCode>KH</iso3166CountryCode>
        <longTermImpact>This project will help improve the mental and physical health of orphaned children in Cambodia.  This project will also ensure the sustainability of the Nutrition Center in Child Mental Health Center.</longTermImpact>
        <need>Our beneficiaries will be orphaned children suffering from AIDS/HIV and other diseases and children with mental health problems whose parents do not know how to cope because they were deprived of family experiences by the forced separations of the Pol Pot regime. At the Nutrition Center in Phnom Penh, we will help urban orphans from brothels and hospitals that have abandoned them. At the Child Mental Health Center, we will help families, largely the working poor, from all over Cambodia.</need>
        <numberOfDonations>102</numberOfDonations>
        <organization>
            <activeProjects>0</activeProjects>
            <addressLine1>1062 Lewiston Road</addressLine1>
            <addressLine2></addressLine2>
            <bridgeId>5824171103</bridgeId>
            <city>New Gloucester</city>
            <countries>
                <country>
                    <iso3166CountryCode>KH</iso3166CountryCode>
                    <name>Cambodia</name>
                </country>
            </countries>
            <country>United States</country>
            <id>10</id>
            <iso3166CountryCode>US</iso3166CountryCode>
            <mission>The mission of FOCUS is to pursue humanitarian programs that include medical aid, school construction and supplies, distribution of rice and rice seeds, road improvements, agricultural improvements, fish farms, basic housing, hospital restoration, school scholarships, and loans for infrastructure improvements. We want to help disadvantaged youth and their families, if they have any, in a country where the infrastructure is still weak due to Khmer Rouge depredations.</mission>
            <name>Friends of Cambodia in the U.S.  (FOCUS)</name>
            <postal>4260</postal>
            <state>Maine</state>
            <themes>
                <theme>
                    <id>health</id>
                    <name>Health</name>
                </theme>
            </themes>
            <totalProjects>2</totalProjects>
            <url></url>
        </organization>
        <progressReportLink>https://www.globalgiving.org/projects/educating-children-of-cambodia/updates/</progressReportLink>
        <projectLink>https://www.globalgiving.org/projects/educating-children-of-cambodia/</projectLink>
        <region>Asia and Oceania</region>
        <remaining>46760.67</remaining>
        <status>funded</status>
        <summary>To help abandoned children, many afflicted with HIV/AIDS, and children with mental health problems. We want to address lack of food, medicine and staff training.</summary>
        <themeName>Health</themeName>
        <title>Improving the Health of Children in Cambodia</title>
        <type>project</type>
    </project>
</projects>
```



## Citation
1. “Giving Statistics.” Charity Navigator, 2018, https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=42. Accessed 23 August 2022.
2. “Usage Statistics of JavaScript as Client-side Programming Language on Websites, August 2022.” W3Techs, 2022, https://w3techs.com/technologies/details/cp-javascript/. Accessed 22 August 2022.
3. “React – A JavaScript library for building user interfaces.” React, https://reactjs.org. Accessed 23 August 2022.
4. “Next.js by Vercel - The React Framework.” Next.js, https://nextjs.org. Accessed 23 August 2022.
5. Kapoor, Ajay. “Next js vs. Angular: Who's the Ultimate Winner of the Frontend Development?” Enlear Academy, https://enlear.academy/next-js-vs-angular-whos-the-ultimate-winner-of-the-frontend-development-a3ee82a6da41. Accessed 2 December 2022.
6. “GlobalGiving API Documentation.” GlobalGiving, https://www.globalgiving.org/api/. Accessed 4 November 2022.
7. “SQLite pros and cons: a short overview.” ThinkAutomation, https://www.thinkautomation.com/our-two-cents/sqlite-pros-and-cons-a/. Accessed 6 December 2022.
8. “Pricing – Vercel.” Vercel, https://vercel.com/pricing. Accessed 4 November 2022.
