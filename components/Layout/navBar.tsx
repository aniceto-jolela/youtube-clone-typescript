import { useRouter } from "next/router";
import {
  AccountCircle,
  AddCircleOutline,
  AnnouncementOutlined,
  DryCleaningOutlined,
  EmojiEventsOutlined,
  Explore,
  FlagCircleOutlined,
  HelpOutline,
  History,
  Home,
  MusicNoteOutlined,
  Newspaper,
  Sensors,
  Settings,
  SmartButtonOutlined,
  SportsEsports,
  SportsEsportsOutlined,
  Subscriptions,
  TipsAndUpdatesOutlined,
  VideogameAssetOutlined,
  VideoLibrary,
  Whatshot,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import theme from "../../src/theme";

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: "calc(100% - 64)",
    borderRight: "none",
  },
  avatar: {
    cursor: "pointer",
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: "Início", path: "home", icon: Home },
  { id: 2, label: "Explorar", path: "", icon: Explore },
  { id: 3, label: "Shorts", icon: SmartButtonOutlined },
  { id: 4, label: "Inscrições", path: "subscriptions", icon: Subscriptions },
];
const secundaryMenu = [
  { id: 1, label: "Biblioteca", icon: VideoLibrary },
  { id: 2, label: "Histórico", icon: History },
];

const thirdMenu = [
  { id: 1, label: "Músicas", icon: MusicNoteOutlined },
  { id: 2, label: "Esportes", icon: EmojiEventsOutlined },
  { id: 3, label: "Jogos", icon: SportsEsportsOutlined },
  { id: 4, label: "Notícias", icon: Newspaper },
  { id: 5, label: "Ao vivo", icon: Sensors },
  { id: 6, label: "Moda e beleza", icon: DryCleaningOutlined },
  { id: 7, label: "Aprender", icon: TipsAndUpdatesOutlined },
  { id: 8, label: "Vídeo em 360º", icon: VideogameAssetOutlined },
];

const fourthMenu = [
  { id: 1, label: "Procurar canais", icon: AddCircleOutline },
];

const fifthMenu = [{ id: 1, label: "Ao vivo", icon: Sensors }];

const sixthMenu = [
  { id: 1, label: "Configurações", icon: Settings },
  { id: 2, label: "Histórico de denúncias", icon: FlagCircleOutlined },
  { id: 3, label: "Ajuda", icon: HelpOutline },
  { id: 4, label: "Enviar feedback", icon: AnnouncementOutlined },
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (item: any) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <List>
        {secundaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir videos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Faze login
          </Button>
        </Box>
      </Box>
      <Divider />

      <List>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          style={{ paddingLeft: theme.spacing(3) }}
        >
          O MELHOR DO YOUTUBE
        </Typography>
        {thirdMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <List>
        {fourthMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <List>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          style={{ paddingLeft: theme.spacing(3) }}
        >
          MAIS DO YOUTUBE
        </Typography>
        {fifthMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <List>
        {sixthMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <Box mx={4} my={2} pb={8}>
        <Typography variant="body2" gutterBottom>
          Sobre Imprensa Direitos autorais Entre em contato Criadores de
          conteúdo Publicidade Desenvolvedores <br />
          <br /> Termos Privacidade Política e segurança Como funciona o YouTube
          Testar os novos recursos <br />
          <br />
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          © 2022 Google LLC
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
