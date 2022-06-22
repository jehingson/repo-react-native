//
import React from 'react'
import { View, Text, Platform } from 'react-native'
import RepositoryList from './RepositoryList'
import { Switch, Route } from 'react-router-native'
import AppBar from './AppBar'
import Login from '../pages/Login'

// const AppBarState = Platform.select({
//   android: () => require('./AppBarANDROIND.jsx').default,
//   default: () => require('./AppBar.jsx').default
// })()


const Main = () => {

  return (
      <View style={{ flexGrow: 1 }}>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Route path="/signin" exact>
            <Login />
          </Route>
        </Switch>
      </View>

  )
}

export default Main