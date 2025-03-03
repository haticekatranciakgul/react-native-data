import react from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Usercard = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Name: {props.username}</Text>

            <View style={styles.inner_container}>
                <Text>Name: {props.name}</Text>
                <Text style={styles.email}>Email: {props.email}</Text>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        marginVertical: 10,
        padding: 10,
    },
    email: {
        fontSize: 12,
        fontStyle: 'italic',    
        color: 'gray ',
        marginLeft: 10
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    inner_container: {
        flexDirection: "row",
        alignItems: 'center',
    }
})

export default Usercard;