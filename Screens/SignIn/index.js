import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'

class SignIn extends Component {
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

        <View style={styles.firstView}>
            <Text style={styles.logoText}>Lawyer app</Text>
        </View>

        <View style={styles.secondView}>
            <View style={styles.inputContainer}>
                <View style={{ flexDirection: 'column', width: '100%', backgroundColor: '#F2E6E7' }}>
                <TextInput
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder=" Enter Email"
                        placeholderTextColor="lightgray"
                        returnKeyType='done'
                        keyboardType="email-address"
                    />
                </View>
                {
                    this.state.emailError ? 
                    <Text style={styles.errorText}>{this.state.emailError}</Text>
                    :
                    null
                }

                {
                    this.state.emailHint ?
                    <Text style={styles.errorText}>Example: xyz@gmail.com</Text>
                    :
                    null
                }
                <View style={styles.mobileNumberView}>
                    <TextInput
                        style={styles.mobileNumberText}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder="Password"
                        placeholderTextColor="lightgray"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.errorText}>{this.state.passwordError}</Text>

                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => {
                        this.loginUser()
                    }}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.appVerText}>App Version 1.0.0</Text>
        </View>
    </View>
    );
  }
}

export default SignIn;