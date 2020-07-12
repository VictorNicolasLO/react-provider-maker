"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
const react_1 = require("react");
function useAuth() {
    const [isAuth, setAuth] = react_1.useState(false);
    const login = react_1.useCallback((user, password) => {
        if (user && password) {
            setAuth(true);
        }
    }, []);
    return { isAuth, login };
}
_a = lib_1.makeProvider(useAuth), exports.AuthProvider = _a.Provider, exports.useAuthProvider = _a.useProvider;
//# sourceMappingURL=auth-provider.js.map