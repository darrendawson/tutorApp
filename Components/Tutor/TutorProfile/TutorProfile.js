import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// =============================================================================
// Component
// =============================================================================

class TutorProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>TutorProfile</Text>
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

export default TutorProfile;
