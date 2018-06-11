import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import Box from './Primitive.js'

export default class App extends React.Component {

  changeScene(){
    console.log('adsf')
  }

  render() {
    return (
      <View>

        <Pano source={asset('360pano.jpg')}/>
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}

          >

            hello
          </Text>
        </VrButton>
        < Box />
      </View>
    );
  }
};
