import React, { useState } from "react";

export const AccessibilityContext = React.createContext({});

export default function AccessibilityContextProvider({ children }) {
  const [userHasHandicap, setUserHasHandicap] = useState(Boolean(localStorage.getItem('userHasHandicap')) ?? false);
  const [userHasVisualHandicap, setUserHasVisualHandicap] = useState(Boolean(localStorage.getItem('userHasVisualHandicap')) ?? false);
  const [titleColor, setTitleColor] = useState(localStorage.getItem('titleColor') ?? '#577eeb')

  return (
    <AccessibilityContext.Provider
      value={{
        userHasHandicap,
        setUserHasHandicap,
        userHasVisualHandicap,
        setUserHasVisualHandicap,
        titleColor,
        setTitleColor
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
