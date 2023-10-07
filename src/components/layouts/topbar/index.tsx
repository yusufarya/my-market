import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { AccountCircle, Login, LoginOutlined } from "@mui/icons-material";
import Link from "next/link";

const TopBar = () => {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuOpen = () => {
    console.log("button sidebar click");
  };
  return (
    <AppBar
      position="static"
      sx={{
        position: "relative",
        top: 0,
        bgcolor: "lightblue",
        color: "black",
      }}
    >
      <Box>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={0} sm={0} md={0} lg={0}>
              <Button
                variant="outlined"
                sx={{
                  margin: 0,
                  position: "relative",
                  left: -40,
                  background: "#ffffff",
                  color: "#03154f",
                }}
                onClick={menuOpen}
              >
                <MenuOpenIcon style={{ left: 10, position: "relative" }} />
              </Button>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" sx={{ pt: 0.3, fontWeight: 550 }}>
                Company Name
              </Typography>
            </Grid>
            <Grid item xs={1}>
              {auth ? (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div style={{ position: "relative", right: "-35%" }}>
                  <Link href={"/authentication/login"}>
                    <Button
                      variant="outlined"
                      sx={{ border: "none", color: "black" }}
                    >
                      Login <LoginOutlined sx={{ ml: 2 }} />
                    </Button>
                  </Link>
                </div>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default TopBar;
