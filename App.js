import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TutorPage from './Components/Tutor/TutorPage.js';

// =============================================================================
// Component
// =============================================================================

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your!</Text>
        <TutorPage/>
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
