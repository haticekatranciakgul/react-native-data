import react from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Usercard = props => {
    return (
        <View style={styles.container}> 
            <Text>Name: {props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        marginVertical: 10,
        padding: 10,
    }
})

export default Usercard;