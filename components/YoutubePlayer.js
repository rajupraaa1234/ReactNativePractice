//import liraries
import React, {useState} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

// create a component
const YoutubePlayerPage = () => {
    const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'84WIaK3bl_s'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};

// define your styles

//make this component available to the app
export default YoutubePlayerPage;
