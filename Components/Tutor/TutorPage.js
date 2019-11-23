import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AllPostings from './AllPostings/AllPostings.js';
import TutorProfile from './TutorProfile/TutorProfile.js';
import PostingPage from './PostingPage/PostingPage.js';

// =============================================================================
// Component
// =============================================================================

class TutorPage extends Component {

  constructor() {
    super();

    this.state = {
      currentPage: "allPostings"
    }
  }


  render() {
    if (this.state.currentPage === "allPostings") {
      return (
        <View style={styles.page_container}>
          <AllPostings
            onClick_moveToProfile={() => this.setState({currentPage: "tutorProfile"})}
            onClick_moveToPost={() => this.setState({currentPage: "postingPage"})}
          />
        </View>
      );
    } else if (this.state.currentPage === "tutorProfile") {
      return (
        <View style={styles.page_container}>
          <TutorProfile
            onClick_moveToAllPosts={() => this.setState({currentPage: "allPostings"})}
          />
        </View>
      );
    } else if (this.state.currentPage === "postingPage") {
      return (
        <View style={styles.page_container}>
          <PostingPage
            onClick_moveToAllPosts={() => this.setState({currentPage: "allPostings"})}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Tutor Page!</Text>
      </View>
    );
  }

}

// =============================================================================
// Styling
// =============================================================================

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TutorPage;
