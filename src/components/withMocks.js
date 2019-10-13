import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { ProvideAuth } from "./useAuth.js"
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import * as R from 'ramda'

const theme = createMuiTheme();

const withMocksInternal = (mocks, story) => (
    <ProvideAuth>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          {story()}
        </ThemeProvider>
      </MockedProvider>
    </ProvideAuth>
)

const withMocks = R.curry(withMocksInternal)

export {withMocks}