export declare function makeProvider<T>(
  useHook: () => T
): { Provider: React.Component; useProvider: () => T };
