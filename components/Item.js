import React from 'react';
import { TouchableHighlight, Text, Image, View } from 'react-native';

export default class Item extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {event_name, place_image} = this.props;
  //  console.log("the props is ",this.props);
    let pic = {"uri": place_image};
    return (
      <View>
        <TouchableHighlight>
          <View>
            <Text>{event_name}</Text>
            <Image style={{width: 150, height: 150}} source={pic} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
