"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
function makeProvider(useHook) {
    const ctx = react_1.createContext({});
    function Provider({ children }) {
        const hookResult = useHook();
        return React.createElement(ctx.Provider, { value: hookResult }, children);
    }
    function useProvider() {
        const content = React.useContext(ctx);
        return content;
    }
    return { Provider, useProvider };
}
exports.makeProvider = makeProvider;
//# sourceMappingURL=index.js.map