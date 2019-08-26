# Spring Fest 2019

## 🚀 Development

### 🗃 Requirements

- Nodejs >= 11.15.0

### 🚂 Running app locally

```sh
cd spring-fest-2019/
npm start
```

Your site is now running at `http://localhost:4000`!

    _Note: You'll also see a second link: _`http://localhost:4000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🗣 How to manage data?

This app retriebe two dynamic data.

- Sessions (speakers & session info)
- Sponsors

These data is managed by Excel on project's root directory.

- data.xlsx

You can convert Excel data to JSON by npm script below.

```
npm run convert:data
```

Represented data (JSON) is automatically converted and place on `src/data` by above script, so you do not directly write in source or existing JSON data.

### Sessions

Session entity is consisted by below.

```javascript
[
  {
    place: string,
    timetable: number,
    title: string,
    abstract: string,
    meta: string[],
    speakers: [
      {
        id: number,
        name: string,
        affiliation: string,
        profile: string,
        // speaker's picture is refer as
        // path to `src/data/images/speakers/${id}.png`
      },
      ...
    ],
    hashtag: string,
    enquete: string,
  },
  ...
]
```

### Sponsors

Sponsor entity is consisted by below.

```javascript
[
  {
    name: string,
    url: string,
    slug: string,
    // company logo will refer as
    // path to `src/data/images/sponsors/${slug}.png`
  },
  ...
]
```

https://www.dropbox.com/home/Spring%20Fest%202019/%E3%83%AD%E3%82%B4

## 💫 Deploy

This application is expected to run on S3. To deploy on S3, you just execute npm script below.

```
TBD
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
