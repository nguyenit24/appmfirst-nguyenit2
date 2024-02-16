import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Alert,
    Button,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native'
const Register = () => {
    let isEmail = (email) => {
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
    }
    const notify = () => {
        Alert.alert('Thông báo tài khoản', `Email: ${email}\nPassword: ${password}`)
    }
    const [keyboardIsshown, setKeyboardIsshown] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () =>
            setKeyboardIsshown(true)
        )
        Keyboard.addListener('keyboardDidHide', () =>
            setKeyboardIsshown(false)
        )
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erroremail, setErrorEmail] = useState(false)
    const [errorpassword, setErrorPassword] = useState(false)
    const [repassword, setRePassword] = useState('')
    const redisable = isEmail(email) && password.length > 3 && repassword == password
    return <View style={{
        backgroundColor: 'orange',
        flex: 100,
    }}>
        <View style={{
            flex: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

            <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                width: '50%',
                color: 'white'
            }}>
                Already have an Account
            </Text>
            <Image
                source={require('../assets/computer.png')}
                style={{
                    height: 120,
                    width: 120,
                    tintColor: 'white'
                }} />

        </View>
        <View style={{
            flex: 48,
            backgroundColor: 'white',
            marginHorizontal: 10,
            paddingTop: 10,
            borderRadius: 15,
        }}>
            <View style={{
                marginHorizontal: 15,
                flex: 15,
            }}>
                <Text style={{
                    color: 'red',
                    fontSize: 18,
                }}>Email:</Text>
                <TextInput
                    style={{
                        color: 'black'
                    }}
                    placeholder={'Example@gmail.com'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    fontSize={18}
                    onChangeText={(text) => {
                        setEmail(text)
                        setErrorEmail(isEmail(text) == true ? false : true)
                    }
                    }
                />
                <View style={{
                    marginTop: 5,
                    height: 1,
                    borderWidth: 1,
                    width: '100%',
                    borderColor: 'rgba(0,0,0,0.5)',
                }}></View>
                {erroremail == true && <View>
                    <Text style={{
                        color: 'red',
                    }}>Email format is wrong</Text>
                </View>}
            </View>
            <View style={{
                marginHorizontal: 15,
                flex: 15,
            }}>
                <Text style={{
                    color: 'red',
                    fontSize: 18,
                }}>Password:</Text>
                <TextInput
                    style={{
                        color: 'black',
                    }}
                    secureTextEntry={true}
                    placeholder={'Enter your password'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    fontSize={18}
                    onChangeText={(text) => {
                        setPassword(text)
                        setErrorPassword(text.length > 3 ? false : true)
                    }
                    }
                />
                <View style={{
                    borderColor: 'rgba(0,0,0,0.5)',
                    marginTop: 5,
                    height: 1,
                    borderWidth: 1,
                    width: '100%'
                }}></View>
                {errorpassword == true && <View>
                    <Text style={{
                        color: 'red',
                    }}>Password must have at least 4 characters</Text>
                </View>}
            </View>
            <View style={{
                marginHorizontal: 15,
                flex: 15,
            }}>
                <Text style={{
                    color: 'red',
                    fontSize: 18,
                }}>Password:</Text>
                <TextInput
                    style={{
                        color: 'black',
                    }}
                    secureTextEntry={true}
                    placeholder={'Enter your password'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    fontSize={18}
                    onChangeText={(text) => {
                        setPassword(text)
                        setErrorPassword(text.length > 3 ? false : true)
                    }
                    }
                />
                <View style={{
                    borderColor: 'rgba(0,0,0,0.5)',
                    marginTop: 5,
                    height: 1,
                    borderWidth: 1,
                    width: '100%'
                }}></View>
                {errorpassword == true && <View>
                    <Text style={{
                        color: 'red',
                    }}>Password must have at least 4 characters</Text>
                </View>}
            </View>
        </View>
        <TouchableOpacity
            disabled={redisable == false}
            style={{
                flex: 5,
                justifyContent: 'center',
                borderWidth: 1,
                backgroundColor: redisable == false ? 'rbga(0,0,0,0.4)' : 'purple',
                alignItems: 'center',
                marginHorizontal: 110,
                marginTop: 10,
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 17,
                    color: 'white',
                    
                }}
            >
                Register
            </Text>
        </TouchableOpacity>
        <View style={{
            flex: 25,
        }}>
            <View style={{
                flex: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginHorizontal: 30,
            }}>
                <View style={{
                    flex: 1,
                    height: 1,
                    borderWidth: 1,
                    width: '50%',
                    borderColor: 'white'
                }}></View>
                <View style={{
                    flex: 1,
                    fontSize: 15,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        color: 'white'
                    }}>Use other methos?</Text>
                </View>
                <View style={{
                    flex: 1,
                    height: 1,
                    borderWidth: 1,
                    width: '50%',
                    borderColor: 'white'
                }}></View>
            </View>
            <View style={{
                flex: 15,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: 120,
            }}>
                <Image source={require('../assets/facebook.png')}
                    style={{
                        height: 50,
                        width: 50,
                    }}
                />
                <Image source={require('../assets/gg.png')}
                    style={{
                        height: 50,
                        width: 50,
                    }}
                />
            </View>
        </View>
    </View>
}
export default Register
// huynh duy nguyen