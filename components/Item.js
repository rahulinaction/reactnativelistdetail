import React from 'react';
import { TouchableHighlight, Text, Image, View } from 'react-native';

export default class Item extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {event_name, place_image} = this.props;
    let pic = {"uri": place_image};
    return (
      <View>
        <TouchableHighlight>
          <View style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
            <Image style={{width: 150, height: 150,marginTop: 30}} source={pic} />
            <Text>{event_name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
