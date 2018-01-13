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

	componentDidMount(){
		this.props.dispatch(fetchReviewers())
	}


	_renderGridView (reviewers) {
		console.log(reviewers)

		let productGrid =[]



		for (let i=0; i < reviewers.length; i += 2){
		//console.log(reviewers[i].name)

			let productRow= []

			for (let k=0; k < 3; k++) {
			//console.log(reviewers[k].location + "" + k)

				productRow.push(
					<Image key={k}
						   style={{marginRight:15,marginBottom:15,borderRadius:3,width:100,height:100,resizeMode:'contain'}} 
						   source={{uri: reviewers[k].avatar}} />
				)
			}	

				productGrid.push(
					<View key={i} style={{flexDirection:'row',justifyContent:'space-between'}}>
						{productRow}
					</View>
				)
			
		}
			console.log(productGrid)

			return productGrid
	}



	render () {
		console.log(this.props.reviewers)
		return(
		    <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
			<Text style={{fontSize:18,fontWeight:'bold',marginBottom:5}}>Top Reviewers</Text>

				{this.props.reviewers.length > 0 ? (
						<View>
							{this._renderGridView(this.props.reviewers)}
						</View>
					) : (null)
				}
		    </View>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		isFetching: state.reviewers.isFetching,
		reviewers: state.reviewers.items
	}
}

export default connect(mapStateToProps)(Reviewers)






	// state = {
	// 	data_image : [
	// 		{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		},{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		},{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		},{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		},{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		},{
	// 			img: 'http://www.indonesiaarchipelago.com/images/bali/balitours/baliisland18.jpg'
	// 		}
	// 	]
	// }

	






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






	//	}
		{/*
			reviewers.length > 0 ? (
				for (let i=0; i<reviewers.length; i +=2 )
					console.log(reviewers[i])

								<View style={{flexDirection:'row'}}>	
									{this.props.reviewers.map(
										(data,index) => (
											<View key={index}>
												<Image 
												style={{width:100,height:100,marginRight:20, resizeMode:'contain',borderRadius:3}}
												source={{uri:data.avatar}} />
				
												<Text>{index}</Text>
				
											</View> )
										)
									}
								</View>
					

				): (null)
			*/}					
	//}






		//const {reviewers} = this.props
		//console.log(reviewers)
		//if (reviewers.length > 0 ) {
			// for (let i=0; i < reviewers.length; i += 2 ){
			// 	let reviewerGrid = []
			// 	//console.log(reviewers[i])
			// 	for (let j=0; j < reviewers.length; j++) {
			// 		console.log(reviewers[j])
			// 		reviewerGrid.push({
			// 			avatar: reviewers[j].avatar,
			// 			location: reviewers[j].location,
			// 			name: reviewers[j].name
			// 		})
			// 	}
			// }

