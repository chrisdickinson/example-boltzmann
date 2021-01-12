"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeting = exports.index = void 0;
index.route = 'GET /';
async function index(context) {
    const name = 'Friendly Boltzmann Author';
    return {
        message: `welcome to boltzmann, ${name}!`,
    };
}
exports.index = index;
greeting.route = 'GET /hello/:name';
async function greeting(context) {
    return `hello ${context.params.name}`;
}
exports.greeting = greeting;
//# sourceMappingURL=handlers.js.map