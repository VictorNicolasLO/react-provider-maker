"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const auth_provider_1 = require("./auth-provider");
function LoginForm() {
    const { isAuth, login } = auth_provider_1.useAuthProvider();
    return isAuth ? (React.createElement("div", null, "loged in")) : (React.createElement("div", { onClick: () => login("user", "password") }, "clcik to login"));
}
exports.default = LoginForm;
//# sourceMappingURL=login-form.js.map