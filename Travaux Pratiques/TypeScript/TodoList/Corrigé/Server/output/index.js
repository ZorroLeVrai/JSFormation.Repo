"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const LISTENING_PORT = 3000;
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST']
};
//middleware cors pour accepter les requêtes venant d'une autre origine
app.use((0, cors_1.default)(corsOptions));
//middleware pour traiter les messages json
app.use(express_1.default.json());
app.post('/add', (req, res) => {
    const result = handleBody(req.body);
    res.send({ result });
});
function handleBody(request) {
    return Number(request.a) + Number(request.b);
}
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));
//# sourceMappingURL=index.js.map