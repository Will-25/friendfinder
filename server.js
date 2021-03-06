var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('./app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
    console.log("http://localhost:8080");
})

