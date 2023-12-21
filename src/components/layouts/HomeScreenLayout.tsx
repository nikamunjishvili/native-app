import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect} from 'react';
import {colors} from '../../themes';
import CardItem from '../_molecules/Card';
import {useNavigation} from '@react-navigation/native';

interface DataType {
  id: number;
  title: string;
  body: string;
  created: string;
}
interface HomeLayoutType {
  title: string;
  setTitle: any;
  description: string;
  setDescription: any;
  data: DataType[] | any;
  setData: any;
  modalVisible: boolean;
  setModalVisible: any;
  selectedPost: null;
  handleCardClick: any;
  handleAddInputValue: any;
}

const HomeScreenLayout = ({
  title,
  setTitle,
  description,
  setDescription,
  data,
  setData,
  modalVisible,
  setModalVisible,
  selectedPost,
  handleCardClick,
  handleAddInputValue,
}: HomeLayoutType) => {
  const navigation = useNavigation();

  useEffect(() => {
    const dataRequest = async () => {
      await fetch(`http://localhost:3200/api/posts`)
        .then(res => res.json())
        .then(data => setData(data));
    };
    dataRequest();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignItems: 'center'}}>
        <Text
          onPress={() => {
            navigation.navigate('post', {
              data: data,
            });
          }}>
          go to the screen
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="write title..."
        />
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          value={description}
          placeholder="write description..."
        />
        <TouchableOpacity
          onPress={handleAddInputValue}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.main,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.green, fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleCardClick(item)} key={item.id}>
            <CardItem
              date={item.date}
              title={item.title}
              body={item.body}
              created={item.created}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: 'red'}}>{selectedPost?.date}</Text>
            <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
            <Text style={styles.modalBody}>{selectedPost?.body}</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    alignSelf: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    textAlign: 'center',
    fontSize: 16,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
