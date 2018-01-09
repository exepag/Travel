import React, {Component} from 'react'
import {
View,
Text,
Image
} from 'react-native'
import {connect} from 'react-redux'
import {fetchReviewers} from '../actions'
//import GridView from 'react-native-flat-grid-view'

const gambar = 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'

class Reviewers extends Component {

	state = {
		data_image : [
			{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			},{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			},{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			},{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			},{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			},{
				img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
			}
		]
	}

	componentDidMount(){
		this.props.dispatch(fetchReviewers())
	}

	render () {
		return(
			<View style={{marginTop:20,marginLeft:10,marginRight:0}}>
			<Text style={{fontSize:18,fontWeight:'bold'}}>Top Reviewers</Text>

			{this.props.reviewers.length > 0 ? (

					<View style={{flexDirection:'row'}}>	
					{this.props.reviewers.map((data,index) => (
						<View key={index}>
							<Image 
								style={{width:100,height:100,marginRight:20, resizeMode:'contain',borderRadius:3}}
								source={{uri:data.avatar}} />
							<Text>{index}</Text>
						</View>

					))}
					</View>
			): (null)}
		
		</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isFetching: state.reviewers.isFetching,
		reviewers: state.reviewers.items
	}
}

export default connect(mapStateToProps)(Reviewers)


{/* <View style={{flexDirection:'row',marginBottom:20}}>
<Image 
	style={{width:100,height:100,marginRight:20, resizeMode:'contain',borderRadius:3}}
	source={{uri:gambar}} />
<Image 
	style={{width:100,height:100,marginRight:20, resizeMode:'contain',borderRadius:3}}
	source={{uri:gambar}} />
<Image 
	style={{width:100,height:100,marginRight:20, resizeMode:'contain',borderRadius:3}}
	source={{uri:gambar}} />
</View> */}

{/*	{this.state.data_image.map((data,index) => (	*/}