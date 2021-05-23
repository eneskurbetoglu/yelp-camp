This was a project for a web dev course taught by Colt Steele.
YelpCamp was created using Node.js, Express, and MongoDB.

I am trying to implement whatever feature I can think of to expand upon this and better understand back-end development.


# Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- Install latest version of npm
  ```sh
  npm install npm@latest -g
  ```
- Install MongoDB [here](https://docs.mongodb.com/manual/administration/install-community/). (You can instead use MongoDB Atlas if you want.)
- Sign up to [Cloudinary](https://cloudinary.com).
- Sign up to [Mapbox](https://www.mapbox.com).

### Installation
- Clone the project
  ```
  git clone https://github.com/eneskurbetoglu/yelp-camp.git
  ```
- Install all the dependencies by running `npm install`.
- Add these environment variables to a .env file on your project root directory.
  ```
  CLOUDINARY_CLOUD_NAME (Your Cloudinary Cloud name)
  ```
  ```
  CLOUDINARY_KEY (Your Cloudinary API Key)
  ```
  ```
  CLOUDINARY_SECRET (Your Cloudinary API Secret)
  ```
  ```
  MAPBOX_TOKEN (Your Mapbox Token)
  ```
- Make sure mongo is running locally. (You can instead add another environment variable for a database url to use MongoDB Atlas)
- Run `node seeds/index.js` to add random campgrounds.
- Run `node app.js` or `nodemon app.js`.

Nodemon will restart the server everytime you make a change.
