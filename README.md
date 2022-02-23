## Mock API using MonoDB, Node JS, Express, Heroku

## Setup
1. Install npm project `npm init -y`
2. Instal express package `npm install express`
3. Install nodemon package `npm install nodemon`
4. Update .gitignore for node_modules
5. Create "startdev":"nodemon app.js" script
6. Add "type ":"module" to package.json for using ES6 modules
7. Create app.js file with the following content:

```javascript
//ROUTES
app.get('/', (req, res) => {
    res.send('Hello MockAPI Node Js!');
});

app.get('/products', (req, res) => {
    res.send('Hello from /products endpoint!');
});
// start the server - on port 3000
app.listen(3000);

```
8. Open the browser and go [here](http://localhost:3000);

### Middleware
```javascript
//MIDLWARE
app.use('/products', () => {
    console.log('/products from endpoint');
   });
// specific function running when /products endpoint is reached