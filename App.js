// 
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import {  ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utilis/apolloClient';


export default function App() {

  const apolloClient = createApolloClient()


  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar  style="light" />
        <NativeRouter>
          <Main />
        </NativeRouter>
    </ApolloProvider>
  );
}
