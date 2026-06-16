import { useState } from "react";
import { Text, View, StyleSheet, Image ,TextInput, ScrollView} from "react-native";

export default function Index() {
  const[input, setInput] = useState("Hello")
  return (
    <ScrollView>
    <Image 
          source={{
            uri:"https://reactnative.dev/img/tiny_logo.png"
          }}
        height ={100}
        width = {100}
    />
      <Text>Hi Sarang here</Text>
<TextInput
  onChangeText={setInput}
  value={input}
  />
    </ScrollView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
