import {useState} from 'react';
import {HomeScreenLayout} from '../../components';
import {Alert} from 'react-native';

const HomeScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const handleCardClick = (post: any) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  const handleAddInputValue = () => {
    if (title === '' && description === '') {
      Alert.alert('pls add post...');
    } else {
      const newPost = {
        date: new Date().toString(),
        title: title,
        body: description,
      };
      setData([...data, newPost]);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <HomeScreenLayout
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      data={data}
      setData={setData}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      selectedPost={selectedPost}
      handleCardClick={handleCardClick}
      handleAddInputValue={handleAddInputValue}
    />
  );
};
export default HomeScreen;
