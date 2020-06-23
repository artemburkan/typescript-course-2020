"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
axios_1["default"]
    .get(url)
    .then(function (response) {
    var todo = response.data;
    console.log("\n          The todo with id: " + todo.id + ".\n          Has todo with title: " + todo.title + "\n          The todo with completed: " + todo.completed + "\n        ");
})["catch"](function (error) {
    console.log("Error message: " + error);
});
