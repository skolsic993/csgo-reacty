import getConfig from "next/config";
import { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const contextPath = getConfig().publicRuntimeConfig.contextPath;
  const model = [
    {
      label: "Home",
      items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
    },
    {
      label: "Pages",
      items: [
        {
          label: "Tournaments",
          icon: "",
          image: "/images/trophy.png",
          to: "/tournaments",
        },
        {
          label: "Matches",
          icon: "",
          image: "/images/match.png",
          to: "/matches",
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
