import React from "react";
import { CssBaseline, Divider, Grid } from "@mui/material";
import Footer from "../footer";
import TopBar from "../topbar";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar";
import BreadcrumbsElement from "../../elements/breadcrumbs";

type AppShellProps = {
  children: React.ReactNode;
};
const AppShell = (props: AppShellProps) => {
  const { children } = props;

  const disableLayout = ["/authentication/login", "/authentication/register"];
  const pathname = usePathname();

  return (
    <>
      <main
        style={{
          color: "#1a1919",
          background: "#ffffff",
          minHeight: "100vh",
          height: "300px",
        }}
      >
        <CssBaseline />
        {disableLayout.includes(pathname) == true ? (
          <div
            style={{
              color: "#1a1919",
              background: "azure",
              minHeight: "100vh",
              height: "300px",
            }}
          >
            {children}
          </div>
        ) : (
          <Grid container columnSpacing={1}>
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={10}>
              <Grid item>
                <TopBar />
              </Grid>
              <Grid item>
                <div
                  style={{
                    color: "#1a1919",
                    background: "azure",
                    minHeight: "83vh",
                    padding: "20px 30px",
                  }}
                >
                  <BreadcrumbsElement />
                  {children}
                </div>
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </Grid>
        )}
      </main>
    </>
  );
};
export default AppShell;
