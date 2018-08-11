import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Header } from './components/common'

class App extends Component {
  componentWillMount() {
    firebase.InitializeApp({
      apiKey: 'AIzaSyDCndHrdvb8Ql3ANhyhGM0WRvy0xNH6nrA',
      authDomain: 'auth-499c9.firebaseapp.com',
      databaseURL: 'https://auth-499c9.firebaseio.com',
      projectId: 'auth-499c9',
      storageBucket: 'auth-499c9.appspot.com',
      messagingSenderId: '258730448436',
    })
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>An app</Text>
      </View>
    )
  }
}

export default App
