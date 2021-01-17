"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todos_1 = require("./routes/todos");
var body_parser_1 = require("body-parser");
var app = express_1.default();
var port = 3000;
app.use(body_parser_1.json());
app.use('/todos', todos_1.router);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
