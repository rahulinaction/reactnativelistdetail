import React from 'react';
import { Text, Image } from 'react-native';

export default class Item extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {text, image} = this.props;
    let pic = {"uri": image};
    return (
      <View>
        <Text>{text}</Text>
        <Image style={{width: 150, height: 150}} source={pic} />
      </View>
    );
  }
}
