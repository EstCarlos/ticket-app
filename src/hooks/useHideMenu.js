import { useEffect, useContext } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (ocultar) => {
  const { showMenu, hideMenu } = useContext(UiContext);

  useEffect(() => {
    if (ocultar) {
      //true
      hideMenu();
    } else {
      //false
      showMenu();
    }
  }, [ocultar, showMenu, hideMenu]);
};
