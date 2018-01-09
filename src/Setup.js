/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
	View,
	ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import Banners from './components/Banners'
import Destinations from './components/Destinations'
import Reviewers from './components/Reviewers'



class Setup extends Component {
  render() {
    return (
	<View style={{flex:1}} >
		<View style={{flex:1}}>
			<Banners />
		</View>
		<View style={{flex:3,backgroundColor:'gainsboro'}}>
			<ScrollView>
				<Destinations />
				<Reviewers />
			</ScrollView>	
		</View>
	</View>
    );
  }
}


//const mapStateToProps = (state) => {
//  console.log(state)
//  return {
//    data: state.data.items
//  }
//}

export default Setup
