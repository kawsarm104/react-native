import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const handleInputChange = text =>{
    alert(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
          < TextInput
         style={styles.input}
          placeholder="Type anything here"
          onChangeText={text=>handleInputChange(text)}
       />
       <Button title="Add">

       </Button>
      </View>
    

   
      <StatusBar style="auto" />
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
