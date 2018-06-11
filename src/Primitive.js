import React from 'react';
import { View, Box, StyleSheet } from 'react-vr';

export default class Boxx extends React.Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={1}
          dimDepth={1}
          dimHeight={.2}
          style={{
            color: 'grey'
          }}
        />
      </View>
    );
  }
};
