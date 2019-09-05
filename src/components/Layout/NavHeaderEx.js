import React, { useEffect }  from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { useAuth } from "../use-auth";
import queryString from 'querystring';
import loginSVG from './log_in.svg';

const Login = () => {
  const auth = useAuth();
  return (
  <div className='App'>
      {/* <Button onClick={() => auth.signin()}>Signin</Button> */}
      <a href="http://localhost:4000/login?client_redirect_uri=http://localhost:3000/callback">Login</a>
      {/* <a href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a> */}
  </div>
)}

const Logout = () => {
  const auth = useAuth();
  return (
  <div className='App'>
      <Button onClick={() => auth.signout()}>Signout</Button>
  </div>
)}


const User = ({collapsed}) => {
  const auth = useAuth()
  return(
  <React.Fragment>
     
      <Avatar
        style={{
          width: collapsed ? 48 : 60,
          height: collapsed ? 48 : 60,
          transition: "0.3s"
        }}
      />
      <div style={{ paddingBottom: 16 }} />
      <Typography variant={"h6"} noWrap>
        {auth.user.token}
      </Typography>
      <Typography color={"textSecondary"} noWrap gutterBottom>
        {auth.user.email}
      </Typography>
      <Logout />
    </React.Fragment>
)}

const NavHeaderEx = ({ collapsed }) => {
  const auth = useAuth();
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    if (parsed["?access_token"]) {
      auth.signin(parsed.access_token);
    }
  },[auth.token]);
  return (<>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
    {auth.user ? 
      (<User collapsed = {collapsed} />)
      : (<Login />)
    }
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
