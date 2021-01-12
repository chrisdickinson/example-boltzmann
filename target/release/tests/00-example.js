"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = require("tap");
const boltzmann_1 = require("../boltzmann");
const _ = boltzmann_1.middleware.test({
    middleware: [],
});
tap_1.test('a basic health check of the test machinery', _(async (t) => {
    t.ok('great success!');
}));
//# sourceMappingURL=00-example.js.map