import React, { useState,useEffect } from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const ListItem = props =>{
    console.log(props.param)
    
     return (
        <View>
            
            <Text>this is my first component... {props.param.toString()}</Text>
        </View>
    )
}

export default  ListItem;