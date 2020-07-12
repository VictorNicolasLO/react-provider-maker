"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const auth_provider_1 = require("./auth-provider");
const login_form_1 = require("./login-form");
function App() {
    return (React.createElement(auth_provider_1.AuthProvider, null,
        React.createElement(login_form_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=app.js.map