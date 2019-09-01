import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "My Playlists",
    icon: "folder",
    route: "/playlists"
  },
  {
    primaryText: "Recent",
    icon: "schedule",
    route: "/recent"
  },
  {
    primaryText: "Search",
    icon: "search",
    route: "/search"
  },
];
const NavContentEx = () => {
  return (
    <List>
    {list.map(({ primaryText, icon, route }, i) => (
      <ListItem key={primaryText} selected={i === 0} button component="a" href={route}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Settings & account"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>)
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
