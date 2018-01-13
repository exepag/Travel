import React, {Component} from 'react'
import {
View,
Text,
Image,
Dimensions,
StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import {fetchBanners} from '../actions'
import {connect} from 'react-redux'

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
//  slide1: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//  slide2: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//  slide3: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  slide: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: '#fff', fontSize: 30, fontWeight: 'bold',
  }
})


// componentDidMount() {
//	this.props.dispatch(fetchBanners())
// }


class Banners extends Component {

//	state = {
//		data_images: [ 
//			{
//				image_link:'https://orig00.deviantart.net/61b9/f/2013/082/e/5/mountain_view_by_rpiko1-d5yz37f.jpg'	
//			}, {
//				image_link:'http://www.ireland-now.com/ireland-photos/castles-in-ireland-medieval-ashford-castle-and-gardens-co-mayo-ireland-244-061a.jpg' 
//			}, {
//				image_link:'http://images3.naharnet.com/images/39514/w460.jpg?1337232607' 
//			} 
//		] 
//	}


	componentDidMount() {
		this.props.dispatch(fetchBanners())
	}


	render () {
		return (

			 <Swiper
				autoplay
				dotColor={'white'} 
				showsButtons={false}>

{/*				{this.state.data_images.map((data,index) => (	*/}
				{this.props.banners.map((data,index) => (
	
					<View style={styles.slide} key={index}>
					    <Image 
						style={{width:'100%',height:'100%'}}
/*						source={{uri:data.image_link}}			*/	
						source={{uri: data.image}}
			
					    />
					</View>

				) )}

			 </Swiper>

		);
	}
}


const mapStateToProps = (state) => {
	return {
		banners: state.banners.items
	}

}


export default connect(mapStateToProps) (Banners)
