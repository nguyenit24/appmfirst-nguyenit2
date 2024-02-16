import { styles } from "../screen/Welcome.js";
import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
function UIButton(props) {
    const { onPress, title, isSelected} = props
    return(
    <TouchableOpacity style={[styles.buttonacc,
        {backgroundColor: isSelected == true ? 'white' : null}]
        }
        onPress={onPress}
    >
        <View style={[styles.viewicon]}>
            { 
                isSelected == true && <Image source={require('../assets/check-mark.png')}
                style={styles.iconcheck} />
            }
        </View>
        <View style={[styles.viewbut]}>
            <Text style={[styles.textbut,{color: isSelected ? 'black' : 'white'}]}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
}
export default UIButton