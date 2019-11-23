import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// =============================================================================
// Component
// =============================================================================

class AllPostings extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_row}>
          <Text style={styles.header_title}>Postings</Text>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button_styling} onPress={this.props.onClick_moveToProfile}>
              <Text>profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.postings_container}>
          <Text>AllPostings</Text>
        </View>
        <View style={styles.new_posting_row}>
          <Button title="New Posting" onPress={this.props.onClick_moveToPost}/>
        </View>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header_row: {
    flexDirection: 'row',
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 25
  },

  postings_container: {
    width: '100%',
    height: '83%',
  },

  new_posting_row: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 25,
    paddingLeft: 25
  },

  header_title: {
    fontSize: 25
  },

  button_container: {
    flexDirection: 'row'
  },

  button_styling: {
    backgroundColor: '#eeeeee',
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  }
});

export default AllPostings;
