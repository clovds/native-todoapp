import {Body, Button, Card, CardItem, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

function App() {
  const [list, setList] = useState(['halo', 'halo']);
  const [listDone, setListDone] = useState(['done test']);
  const [input, setInput] = useState();

  const renderCard = (item, index) => {
    return (
      <TouchableOpacity>
        <View style={styles.cardStyle}>
          <Card>
            <CardItem>
              <Body style={styles.cardBody}>
                <Text style={styles.cardText}>{item}</Text>
                <View style={styles.cardBtn}>
                  <Button
                    bordered
                    danger
                    style={styles.deleteBtn}
                    onPress={() => deleteBtn(index)}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Button>
                  <Button
                    bordered
                    success
                    style={styles.doneBtn}
                    onPress={() => doneBtn(index)}>
                    <Text style={styles.doneText}>Done</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCardDone = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.cardStyle} key={item}>
          <Card>
            <CardItem>
              <Body style={styles.cardBody}>
                <Text style={styles.cardTextDone}>{item}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  const addTodo = () => {
    setList([...list, input]);
    setInput(null);
    Keyboard.dismiss();
  };

  const doneBtn = (index) => {
    let done = list.slice(index, index + 1);
    setListDone([...listDone, done]);
    let listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  const deleteBtn = (index) => {
    let listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.topContainer}>
        <View>
          <Text style={styles.sectionTitle}>Today's to do</Text>
          <FlatList
            data={list}
            renderItem={({item, index}) => {
              return renderCard(item, index);
            }}
            style={styles.flatList}
          />
        </View>
        <View style={styles.todoDoneWrapper}>
          <Text style={styles.todoDone}>To do done</Text>
          <FlatList data={listDone} renderItem={renderCardDone} />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Item>
          <Input
            placeholder="What would you do, today?"
            style={styles.inputStyle}
            onChangeText={(e) => setInput(e)}
            value={input}
            onSubmitEditing={addTodo}
            autoCapitalize="sentences"
            // onKeyPress={(e) => (e.nativeEvent.key == 'Enter' ? addTodo : null)}
          />
        </Item>
        <Button block info style={styles.btnStyle} onPress={addTodo}>
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
    backgroundColor: '#E8EAED',
  },
  bottomContainer: {
    flex: 0.3,
    // marginTop: 50,
    height: Dimensions.get('screen').height / 15,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    paddingTop: 40,
    marginBottom: 10,
  },
  fontStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  btnStyle: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  inputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardStyle: {
    marginHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '500',
  },
  cardTextDone: {
    fontSize: 20,
    fontWeight: '500',
    textDecorationLine: 'line-through',
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteBtn: {
    marginHorizontal: 5,
    width: 55,
  },
  deleteText: {
    textAlign: 'center',
    fontWeight: '500',
    marginHorizontal: 6,
    color: 'red',
  },
  doneBtn: {
    width: 50,
  },
  doneText: {
    textAlign: 'center',
    marginHorizontal: 7,
    fontSize: 15,
    color: 'green',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  todoDone: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  todoDoneWrapper: {
    marginBottom: 100,
  },
});

export default App;
