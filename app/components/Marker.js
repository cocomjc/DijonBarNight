import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


const Marker = ({ onPress, top, left, value }) => (
    <TouchableOpacity 
        onPress={onPress}
        style={{
            height: 30, width: 30,
            position: 'absolute', top, left
        }}>
        <Text style={{
            textAlign: 'center', fontSize: 25,
            lineHeight: 30, color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
        }}>{value}</Text>
    </TouchableOpacity>
)

export default Marker