import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { presets } from 'mui-layout';
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme, Box, Typography } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import { Root, Header, Nav, Content, Footer } from "mui-layout";



import NavContentEx from "./NavContentEx";
import NavHeaderEx from "./NavHeaderEx";
import HeaderEx from "./HeaderEx";
import ContentForm from "./ContentForm";
import ContentEx from "./ContentEx";
import FooterEx from "./FooterEx";
import {OmniSearch} from '../OmniSearch'
import {Recent} from '../Recent'

const {
    createStandardLayout,
    createFixedLayout,
    createContentBasedLayout,
    createCozyLayout,
    createMuiTreasuryLayout,
  } = presets;
  
const config = createContentBasedLayout();
const theme = createMuiTheme();

// See https://codesandbox.io/s/material-ui-layout-v129-7mn9xq3nnj?from-embed

const MyLoading = () => {
  return (
    <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant={"h2"}>Changing preset...</Typography>
      </div>
  )
}

const MyLayout = () => {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  return (
      <ThemeProvider theme={theme}>
      {loading ? <MyLoading/> : (
      <Root
        config={presets[preset]({ headerPosition: "relative" })}
        style={{ minHeight: "100vh" }}
      >
        <CssBaseline />
        <Header
          renderMenuIcon={opened =>
            opened ? <Icon>chevron_left</Icon> : <Icon>menu_rounded</Icon>
          }
        >
          {({ screen, collapsed }) =>
            data.header && <HeaderEx screen={screen} collapsed={collapsed} />
          }
        </Header>
        <Nav
          renderIcon={collapsed =>
            collapsed ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>
          }
          header={({ collapsed }) =>
            data.nav && <NavHeaderEx collapsed={collapsed} />
          }
        >
          {data.nav && <NavContentEx />}
        </Nav>
        <Content>
          {/* <ContentForm
            preset={preset}
            onChangePreset={val => {
              setLoading(true);
              setPreset(val);
              setTimeout(() => setLoading(false), 500);
            }}
            data={data}
            onChangeData={setData}
          /> */}
         {data.content && <ContentEx/>}
        </Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    )}
    </ThemeProvider>
  )
}

export {MyLayout}