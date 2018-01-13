render() {

	return(

		<View>

			<Text>Top Destinations</Text>

			{this.props.daftar_destinasi.length > 0 ? (

				<ScrollView showHorizontalScrollIndicator={false} horizontal={true} >

					{this.props.daftar_destinasi.map( 
						( data, index ) => (  <Image key={index} source={{uri:data.image}} style={{marginRight:3}} />  ) 

						)
					}				


				</ScrollView>

			    ) : null
			}




		</View>
	)
}
