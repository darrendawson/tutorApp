import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// =============================================================================
// Component
// =============================================================================

class [name] extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>[name]</Text>
      </View>
    );
  }

}

// =============================================================================
// Styling
// =============================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default [name];
