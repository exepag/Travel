import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = (state, action) => {
  return {
    type: FETCH_DATA
  }
}


export const FETCH_BANNERS = 'FETCH_BANNERS'
export const fetchBanners = () => {
	return {
		type: FETCH_BANNERS,
		payload: BannerList()
	}
}

const BannersList = () => {
	const url_banners = 'http://172.104.50.9:3000/api/banner_lists'
	return axios.get(url_banners)
		.then(res=>{
			console.log(res)
			return res
		})
		.catch(err=>{
			console.log(err)
		})
}
