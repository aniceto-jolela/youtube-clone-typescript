import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  Hidden,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, Apps, MoreVert, VideoCall } from "@mui/icons-material";

const useStyles = makeStyles((theme: any) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img
            src="/new-youtube-logo.svg"
            alt="logo"
            className={classes.logo}
          />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="pesquisar"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" aria-labe="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
