import React from 'react'
import { View, Text } from 'react-native'

export default function Advocates(props) {
    console.log(props.advocate)
    
    return (
        <View>
            <Text>{props.advocate.email}</Text>
        </View>
    )
}
