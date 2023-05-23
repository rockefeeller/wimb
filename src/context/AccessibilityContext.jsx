import React, { useState } from "react";

export const AccessibilityContext = React.createContext({});

export default function AccessibilityContextProvider({ children }) {
  const [userHasHandicap, setUserHasHandicap] = useState(false);
  const [userHasVisualHandicap, setUserHasVisualHandicap] = useState(false);

  return (
    <AccessibilityContext.Provider
      value={{
        userHasHandicap,
        setUserHasHandicap,
        userHasVisualHandicap,
        setUserHasVisualHandicap,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
