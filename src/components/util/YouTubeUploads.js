import React, {useEffect, useState} from 'react'
import { RightBoxHeaderTypography, RightBoxSubHeaderTypography } from './grid/OneThirdTwoThirdsGrid'

import VideoInfoContainer from './VideoInfoContainer'

import {LeftBoxPaper} from './grid/OneThirdTwoThirdsGrid'
import { Skeleton } from '@material-ui/lab'


export default function YouTubeUploads({ youtubeData })
{
	const [videos, setVideos] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
			if (youtubeData !== undefined)
			{
				setVideos(youtubeData.videos.map(item => {
					const img = new Image()
					img.src = item.thumbnailUrl
					return(
						<VideoInfoContainer
							thumbnailImg={img}
							title={item.title}
							description={item.description}
							url={item.url}
						/>
					)
				}))
				setIsLoading(false)
			}
	}, [youtubeData])


	return(
		<LeftBoxPaper style={{marginBottom: '2.5rem'}} >
			<RightBoxHeaderTypography variant='h4'>
				YouTube
			</RightBoxHeaderTypography>
			<RightBoxSubHeaderTypography variant='h5'>
				Catch Up On Previous Uploads
			</RightBoxSubHeaderTypography>

			{(isLoading === true)
				? <Skeleton width='100%' height='28rem' style={{transform: 'none', borderRadius: '2rem'}} />:
				<div style={{display: 'flex', maxWidth: '100%', overflowX: 'scroll', paddingBottom: '.75rem'}}>
					{videos}
				</div>
			}

		</LeftBoxPaper>
	)
}