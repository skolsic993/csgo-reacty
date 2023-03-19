import Link from "next/link";
import { useRouter } from "next/router";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import { useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { MenuContext } from "./context/menucontext";

const AppMenuitem = (props) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const router = useRouter();
  const item = props.item;
  const key = props.parentKey
    ? props.parentKey + "-" + props.index
    : String(props.index);
  const isActiveRoute = item.to && router.pathname === item.to;
  const active = activeMenu === key || activeMenu.startsWith(key + "-");

  useEffect(() => {
    if (item.to && router.pathname === item.to) {
      setActiveMenu(key);
    }

    const onRouteChange = (url) => {
      if (item.to && item.to === url) {
        setActiveMenu(key);
      }
    };

    router.events.on("routeChangeComplete", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [item]);

  const itemClick = (event) => {
    //avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    //execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    // toggle active state
    if (item.items) setActiveMenu(active ? props.parentKey : key);
    else setActiveMenu(key);
  };

  const subMenu = item.items && item.visible !== false && (
    <CSSTransition
      timeout={{ enter: 1000, exit: 450 }}
      classNames="layout-submenu"
      in={props.root ? true : active}
      key={item.label}
    >
      <ul>
        {item.items.map((child, i) => {
          return (
            <AppMenuitem
              item={child}
              index={i}
              className={child.badgeClass}
              parentKey={key}
              key={child.label}
            />
          );
        })}
      </ul>
    </CSSTransition>
  );

  return (
    <li
      className={classNames({
        "layout-root-menuitem": props.root,
        "active-menuitem": active,
      })}
    >
      {props.root && item.visible !== false && (
        <div className="layout-menuitem-root-text">{item.label}</div>
      )}
      {(!item.to || item.items) && item.visible !== false ? (
        <a
          href={item.url}
          onClick={(e) => itemClick(e)}
          className={classNames(item.class, "p-ripple")}
          target={item.target}
          tabIndex="0"
        >
          {item.icon && (
            <i className={classNames("layout-menuitem-icon", item.icon)}></i>
          )}
          {item.image && (
            <img
              src={item.image}
              alt="Icon"
              style={{ width: "1rem", height: "1rem" }}
              className="layout-menuitem-icon"
            />
          )}
          <span className="layout-menuitem-text">{item.label}</span>
          {item.items && (
            <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
          )}
          <Ripple />
        </a>
      ) : null}

      {item.to && !item.items && item.visible !== false ? (
        <Link href={item.to} replace={item.replaceUrl} target={item.target}>
          <span
            onClick={(e) => itemClick(e)}
            className={classNames(item.class, "p-ripple", {
              "active-route": isActiveRoute,
            })}
            target={item.target}
            tabIndex="0"
          >
            {item.icon && (
              <i className={classNames("layout-menuitem-icon", item.icon)}></i>
            )}
            {item.image && (
              <img
                src={item.image}
                alt="Icon"
                style={{ width: "1rem", height: "1rem" }}
                className="layout-menuitem-icon"
              />
            )}
            <span className="layout-menuitem-text">{item.label}</span>
            {item.items && (
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            )}
            <Ripple />
          </span>
        </Link>
      ) : null}

      {subMenu}
    </li>
  );
};

export default AppMenuitem;
