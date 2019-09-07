import React, { useEffect }  from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { useAuth } from "../useAuth";
import queryString from 'querystring';
import * as R from 'ramda'

const Login = () => {
  const auth = useAuth();
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    if (parsed["?access_token"]) {
      auth.signin(parsed["?access_token"]);
    }
  });
  return (
  <div className='App'>
      {/* <Button onClick={() => auth.signin()}>Signin</Button> */}
      <a href={`${process.env.REACT_APP_SPOTIFY_ANALYZER_LOGIN}?client_redirect_uri=${process.env.REACT_APP_SPOTIFY_AUTH_CALLBACK}`}>Sign in</a>
      {/* <a href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a> */}
  </div>
)}

const Logout = () => {
  const auth = useAuth();
  return (
  <div className='App'>
      <Button onClick={() => auth.signout()}>Sign out</Button>
  </div>
)}


const User = ({user, collapsed}) => {
  return(
  <React.Fragment>
     
      <Avatar
        src = {user.image}
        alt = {user.display_name}
        style={{
          width: collapsed ? 48 : 60,
          height: collapsed ? 48 : 60,
          transition: "0.3s"
        }}
      />
      <div style={{ paddingBottom: 16 }} />
      <Typography variant={"h6"} noWrap>
        {user.display_name}
      </Typography>
      <Logout />
    </React.Fragment>
)}

const NavHeaderEx = ({ collapsed }) => {
  const auth = useAuth();
  return (<>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
    {auth.user ? (<User user = {{display_name: "Richard", image: "https://profile-images.scdn.co/images/userprofile/default/8a3ebfc36a61a477ff1dacb4d1aa370c6fe02ce6"}} collapsed = {collapsed} />) : (<Login />)}
    </div>
    <Divider />
  </>)
};

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;
