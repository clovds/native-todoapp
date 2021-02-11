import {Button, Input} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text>TodoApp</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Input placeholder="Underline Textbox" />
        <Button block info>
          <Text style={styles.fontStyle}>Add</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  topContainer: {
    flex: 1,
  },
  fontStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;
