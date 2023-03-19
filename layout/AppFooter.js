import getConfig from "next/config";
import { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppFooter = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const contextPath = getConfig().publicRuntimeConfig.contextPath;

  return (
    <div className="layout-footer">
      by
      <span className="font-medium ml-2">Milos Stojsavljevic</span>
    </div>
  );
};

export default AppFooter;
