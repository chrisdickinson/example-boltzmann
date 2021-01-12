"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_MIDDLEWARE = exports.routeMiddlewareFunc = exports.setupMiddlewareFunc = void 0;
// All Boltzmann middleware looks like this.
// Middleware can be attached to either the app or individual routes.
function setupMiddlewareFunc( /* your config */) {
    // startup configuration goes here
    return function createMiddlewareFunc(next) {
        return async function inner(context) {
            // do things like make objects to put on the context
            // then give following middlewares a chance
            // route handler runs last
            // awaiting is optional, depending on what you're doing
            const result = await next(context);
            // do things with result here; can replace it entirely!
            // and you're responsible for returning it
            return result;
        };
    };
}
exports.setupMiddlewareFunc = setupMiddlewareFunc;
// Here's a more compactly-defined middleware.
function routeMiddlewareFunc( /* your config */) {
    return (next) => {
        return (context) => {
            return next(context);
        };
    };
}
exports.routeMiddlewareFunc = routeMiddlewareFunc;
// This export is special: it instructs Boltzmann to attach
// middlewares to the app in this order.
// This is also where you can configure built-in middleware.
exports.APP_MIDDLEWARE = [
    setupMiddlewareFunc,
];
//# sourceMappingURL=middleware.js.map