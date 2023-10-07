import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Settings,
  DashboardRounded,
} from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../assets/img/cart.png";
import Link from "next/link";
import ListMenu from "./menu";
import { usePathname } from "next/navigation";
import style from "@/src/components/layouts/sidebar/sidebar.module.css";
import { useRouter } from "next/router";

// interface UseType {
//   slug: string;
//   event: null;
// }

export default function Sidebar() {
  const dataMenu = ListMenu();
  const router = useRouter();
  const query = router.query;
  const slug = query.slug;

  const pathnameOrigin = usePathname();
  console.log(pathnameOrigin);
  const segment = pathnameOrigin.split("/");
  const pathname = "/" + segment[1].split("-")[1];
  const menuActive = segment[1].split("-")[0];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuName, setMenuName] = React.useState("");

  const handleMenuClick = (event: React.SetStateAction<string>) => {
    setMenuOpen(!menuOpen);
    if (menuName != event) {
      setMenuOpen(true);
    }
    setMenuName(event);
  };
  // router.replace(url, as, options);
  React.useEffect(() => {
    // if (router.isReady) {
    //   router.push(
    //     {
    //       query: query,
    //     },
    //     undefined,
    //     { shallow: true }
    //   );
    //   const utm_source = query.utm_source;
    //   if (utm_source) {
    //     console.log(utm_source);
    //     // do data tracking
    //   }
    // }
    setMenuOpen(true);
    setMenuName(menuActive);
  }, [router.isReady]);

  // console.log("menuOpen ====== " + menuOpen);
  // console.log("menuName ====== " + menuName);

  return (
    <div>
      <Drawer
        PaperProps={{
          sx: {
            height: "100%",
            width: "17%",
            bgcolor: "#fff",
            color: "#1a1919",
          },
        }}
        variant="permanent"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item sx={{ col: 2, ml: 4, mt: 1 }}>
            <Image src={logo} width={50} height={50} alt="logo" priority />
          </Grid>
          <Grid item sx={{ col: 6, mr: 8, mt: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              My App
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <List>
          <Link href={"/dashboard"}>
            <ListItem
              button
              sx={{ borderRadius: 2 }}
              className={
                pathname == "/dashboard"
                  ? style.menu_active + " menu-hover"
                  : "menu-hover"
              }
              onClick={() => handleMenuClick("/dashboard")}
            >
              <ListItemIcon
                sx={{ mr: -2 }}
                className={pathname == "/dashboard" ? style.icon_active : ""}
              >
                <DashboardRounded className="menu-hover" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Divider />
          <br />
          {dataMenu.map((menu) => (
            <React.Fragment key={menu.id}>
              <ListItem
                button
                sx={{ borderRadius: 2 }}
                className={
                  (menuName == menu.slug) == true
                    ? style.menu_active + " menu-hover"
                    : "menu-hover"
                }
                onClick={() => handleMenuClick(menu.slug)}
              >
                <ListItemIcon sx={{ mr: -2 }}>
                  <menu.icon
                    className={menuName == menu.slug ? style.icon_active : ""}
                  />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
                {menuName == menu.slug && menuOpen == true ? (
                  <ExpandMore />
                ) : (
                  <ExpandLess style={{ transform: "rotate(90deg)" }} />
                )}
              </ListItem>
              <Collapse
                in={menuName == menu.slug && menuOpen == true ? true : false}
                timeout="auto"
                unmountOnExit
                sx={{ ml: 1 }}
              >
                <List component="div" disablePadding>
                  {menu.submenu.map((submenu, index) => (
                    <React.Fragment key={index}>
                      <Link
                        href={{
                          pathname: submenu.url,
                          query: {
                            menu: submenu.name,
                            slug: menu.slug,
                            parent: menu.name,
                          },
                        }}
                        as={menu.slug + "-" + submenu.url.substring(1, 100)}
                        // passHref
                      >
                        <div
                          className={
                            pathname == submenu.url ? style.submenu_active : ""
                          }
                        >
                          <ListItem button>
                            <b style={{ marginTop: -4, fontSize: "18px" }}>›</b>
                            <ListItemText
                              // primary={submenu.name}
                              primary={
                                <Typography variant="body2">
                                  {submenu.name}
                                </Typography>
                              }
                              sx={{ ml: 3.3, fontWeight: 600 }}
                            />
                          </ListItem>
                        </div>
                      </Link>
                    </React.Fragment>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
          <ListItem button>
            <ListItemIcon sx={{ mr: -2 }}>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
