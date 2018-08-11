import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', err: '', loading: false }

  onBottonPress() {
    this.setState({ err: '', loading: true })

    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        this.setState({ err: '', loading: false, email: '', password: '' }),
      )
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
            this.setState({ err: 'Invalid Auth' })
            this.setState({ loading: false })
          })
      })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    }

    return <Button onPress={this.onBottonPress.bind(this)}>Log In</Button>
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
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

export default LoginForm
