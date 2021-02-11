import {Body, Button, Card, CardItem, Icon, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

function App() {
  const [list, setList] = useState(['halo', 'halo']);
  const [input, setInput] = useState('');

  const renderCard = ({item}) => {
    console.log(input);
    return (
      <View>
        <Card>
          <CardItem>
            <Body>
              <Text>{item}</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <FlatList data={list} renderItem={renderCard} />
      </View>
      <View style={styles.bottomContainer}>
        <Item>
          <Input
            placeholder="What would you do, today?"
            style={styles.inputStyle}
            onChangeText={(e) => setInput(e)}
            value={input}
          />
        </Item>
        <Button
          block
          info
          style={styles.btnStyle}
          onPress={() => setList([...list, input])}>
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
    backgroundColor: '#a0c1b8',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 50,
    height: Dimensions.get('screen').height / 15,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    width: Dimensions.get('screen').width / 1.5,
  },
  fontStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  btnStyle: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  inputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardStyle: {
    marginVertical: 5,
  },
});

export default App;
