import React, { useEffect }  from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { useAuth } from "../useAuth";
import queryString from 'querystring';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';

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
      <a href={`${window._env_.REACT_APP_SPOTIFY_ANALYZER_LOGIN}?client_redirect_uri=${window.location.origin.toString()}/callback`}>Sign in</a>
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

const NoUser = ({collapsed}) => {
  return(
  <React.Fragment>
     
      <Avatar
        src = "/spotify_grey.png"
        style={{
          width: collapsed ? 48 : 60,
          height: collapsed ? 48 : 60,
          transition: "0.3s"
        }}
      />
      <div style={{ paddingBottom: 16 }} />
      <Login />
    </React.Fragment>
)}


const User = ({user, collapsed}) => {
  return(
  <React.Fragment>
     
      <Avatar
        src = {user.image ? user.image : "/spotify_green.jpg"}
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

const QUERY = gql`
  {
  me {
    display_name
    image
  }
}


`;
const QueryUser = () => {
  const { loading, error, data } = useQuery(QUERY)
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;
  return <User user = {{display_name: data.me.display_name, image: data.me.image}}/>
}

const NavHeaderEx = ({ collapsed }) => {
  const auth = useAuth();
  return (<>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s" }}>
    {auth.user ? (<QueryUser />) : (<NoUser />)}
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

export {User, NoUser, Login, Logout}
export default NavHeaderEx
