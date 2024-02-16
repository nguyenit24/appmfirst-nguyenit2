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
import Flatlist from './Foodlist'
// import { Icon } from 'react-native-elements'
const FoodItem = (props) => {
    function colortext(status) {
        if (status.toLowerCase().trim() == 'opening soon')
            return 'green';
        else if (status.toLowerCase().trim() == 'closing soon')
            return 'yellow';
        else
            return 'red';
    }
    function itempress(){
        Alert.alert( 'Bạn có muốn chọn' ,`Tên món: ${name}\nGiá: ${price}$`)
    }
    let { name, url, status, price, website, socialNetworks } = props.food
    return <TouchableOpacity
        onPress={()=>itempress()}
        style={{
            borderBottomWidth: 1,
            height: 150,
            flexDirection: 'row',
            // backgroundColor: 'purple'
            marginTop: 10,
        }}>
        <View style={{
            width: 140,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                style={{
                    height: "78%",
                    width: "80%",
                    borderRadius: 15,
                }}
                resizeMode='cover'
                source={{
                    uri: url,
                }}
            />
        </View>
        <View style={{
            flex: 1,
            // backgroundColor: 'purple',
            padding: 10,
        }}>
            <Text style={{
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{ height: 1, borderWidth: 1 }} />
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Status:</Text>
                <Text style={{
                    color: colortext(status),
                    fontWeight: 'bold'
                }}>{status.toUpperCase()}</Text>
            </View>
            <Text>Price Range: {price}$</Text>
            <Text>Website: {website}</Text>
            <Text>Food type: Pizza</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                {
                    socialNetworks['facebook'] != undefined && <Image
                        source={require('../assets/facebook.png')}
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            marginLeft: 5,
                        }}
                    />
                }
                {
                    socialNetworks['twitter'] != undefined && <Image
                        source={require('../assets/twitter.png')}
                        style={{
                            height: 20,
                            width: 20,
                            marginLeft: 5,
                            borderRadius: 10,
                        }}
                    />
                }
                {
                    socialNetworks['instagram'] != undefined && <Image
                        source={require('../assets/instagram.png')}
                        style={{
                            height: 20,
                            width: 20,
                            marginLeft: 5,
                            borderRadius: 10,
                        }}
                    />
                }
            </View>
        </View>
    </TouchableOpacity>
}
export default FoodItem