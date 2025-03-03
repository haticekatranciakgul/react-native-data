import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Usercard from './src/components/UserCard/UserCard';

export default function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = 'https://jsonplaceholder.typicode.com/users'

  async function fetchData() {
  
    // setLoading(true);
    // const response = await axios.get(URL);

    // setLoading(false);

    // setUserList(response.data);

    axios.get(URL).then((response) => {
      setLoading(false);
      setUserList(response.data);

    })




  }

  const renderUser = ({ item }) => <Usercard name={item.name} username={item.username} email={item.name} />;

  useEffect(() => {
    fetchData();
  }, [])



  return (

    <SafeAreaView>
      <View >
        {loading ?  
          (
          <ActivityIndicator size="large" color="#0000ff" />
          )
         :
          (
            <FlatList data={userList} renderItem={renderUser} ></FlatList>
          )
        }
        <Button title="Fetch Data" onPress={fetchData} />
      </View>

    </SafeAreaView>

  );
}


