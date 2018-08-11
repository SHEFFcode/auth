import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCndHrdvb8Ql3ANhyhGM0WRvy0xNH6nrA',
      authDomain: 'auth-499c9.firebaseapp.com',
      databaseURL: 'https://auth-499c9.firebaseio.com',
      projectId: 'auth-499c9',
      storageBucket: 'auth-499c9.appspot.com',
      messagingSenderId: '258730448436',
    })

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: Boolean(user) })
    })
  }

  renderContent() {
    const { loggedIn } = this.state

    switch (loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size={'large'} />
    }
  }

  render() {
    return (
      <View style={{ minHeight: 100 }}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
