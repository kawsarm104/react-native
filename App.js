import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import ListItem from './Components/ListItem';

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [placeList, setPlaceList] = useState("")
  const test = false
  const [allAdvocates, setAllAdvocates] = useState({})

    useEffect(() => {
        const api = "https://fathomless-coast-82114.herokuapp.com/advocates"
      fetch(api)
      .then(res=>res.json())
      .then(data=>{
        setAllAdvocates(data)
          console.log(data)
      })
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
          < TextInput
         style={styles.input}
          placeholder="Type anything here"
          value={inputValue}
          onChangeText={text=>setInputValue(text)}
       />
       <Button title="Add"
       onPress={()=>{
         if(inputValue!== ""){

          setPlaceList([...placeList, inputValue])
         }
       }}
       />
      </View>
      <Text>Total Advocates Found: {allAdvocates.length}</Text>
      <View>
        <ListItem param={test}></ListItem>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:"column"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    
  },
  inputView:{
    marginTop:50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }
});
