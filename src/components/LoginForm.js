import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', err: '' }

  onBottonPress() {
    this.setState({ err: '' })

    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
            this.setState({ err: 'Invalid Auth' })
          })
      })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'example@email.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>
          {this.state.err}
        </Text>
        <CardSection>
          <Button onPress={this.onBottonPress.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
