import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'

class SignUp extends Component {
    constructor() {
    super()
    this.state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        emailHint: true
     }
    }
    loginUser(){
    alert("Hello")
    }

    render() {
    return (
        <View style={styles.container}>
            <Text>SignUp</Text>
        </View>
    );
  }
}

export default SignUp;