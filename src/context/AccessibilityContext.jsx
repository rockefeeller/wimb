import React, { useState } from "react";

export const AccessibilityContext = React.createContext({});

export default function AccessibilityContextProvider({ children }) {
  useState(localStorage.getItem('userHasHandicap') === 'true' ? true : false)
  const [userHasHandicap, setUserHasHandicap] = useState(localStorage.getItem('userHasHandicap') === 'true' ? true : false)
  const [userHasVisualHandicap, setUserHasVisualHandicap] = useState(localStorage.getItem('userHasVisualHandicap') === 'true' ? true : false)
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
