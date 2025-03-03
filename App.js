import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import Usercard from './src/components/UserCard/UserCard';

export default function App() {
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    setUserList(response.data);

  }

  const renderUser = ({ item }) => <Usercard name= {item.name} />;

  return (

    <SafeAreaView>
      <View >
        <FlatList
          data={userList}
          renderItem={renderUser}
        ></FlatList>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>

    </SafeAreaView>

  );
}


