import axios from 'axios'

const BASE_API_URL = 'http://172.104.50.9:3000'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = (
//			  state, action
					) => {
  return {
    type: FETCH_DATA
  }
}


export const FETCH_BANNERS = 'FETCH_BANNERS'
export const fetchBanners = () => {
	return {
		type: FETCH_BANNERS,
		payload: BannersList()
	}
}

const BannersList = () => {
//	const url_banners = 'http://172.104.50.9:3000/api/banner_lists'
	const url_banners = `${BASE_API_URL}/api/banner_lists`
	return axios.get(url_banners)
		.then(res=>{
			console.log(res)
			return res
		})
		.catch(err=>{
			console.log(err)
		})
}


export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS'
export const fetchDest = () => {
	return {
		type: FETCH_DESTINATIONS,
		payload: DestinationList()
	}
}

const DestinationList = () => {
	const url_dest = `${BASE_API_URL}/api/destination_lists`
	return axios.get(url_dest)
		.then(res=>{
			return res
		})
		.catch(err=>{
			console.log(err)
		})
}









export const FETCH_REVIEWERS = 'FETCH_REVIEWERS'
export const fetchReviewers = () => {
	return {
	type: FETCH_REVIEWERS,
	payload: ReviewersList()
	}
}

const ReviewersList = () => {
	const url_reviewer = `${BASE_API_URL}/api/reviewer_lists`
	return axios.get(url_reviewer)
		.then(res=>{
			console.log(res)
			return res
		})
		.catch(err=>{
			console.log(err)
		})
}




