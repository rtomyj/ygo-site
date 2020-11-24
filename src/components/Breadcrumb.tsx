import React, { FunctionComponent, memo } from 'react'

import {Breadcrumbs, Link, Box} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import HomeIcon from '@material-ui/icons/Home'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Block from '@material-ui/icons/Block'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info';

import { NAME_maps_ROUTE } from '../Routes'

import styled from 'styled-components'


type BreadcrumbProps = {
	crumbs: string[]
}


const BreadCrumbsContent = styled(Box)`
	&&
	{
		display: flex;
		padding: 1rem;
		margin-bottom: 1.3rem;
	}

`

const BreadCrumbItem = styled(Link)`
	&&
	{
		display: flex;
		font-weight: 600;
		color: rgb(101, 119, 134);
	}
`


const BREADCRUMB_maps_ICON = new Map()
const iconStyle = { width: 20, height: 20, marginRight: 5, color: 'rgba(68, 68, 68, 0.68)' }
BREADCRUMB_maps_ICON.set('Home', <HomeIcon style={iconStyle} />)
BREADCRUMB_maps_ICON.set('Ban List', <Block style={iconStyle} />)
BREADCRUMB_maps_ICON.set('404 - Err', <ErrorIcon style={iconStyle} />)
BREADCRUMB_maps_ICON.set('About', <InfoIcon style={iconStyle} />)


const Breadcrumb: FunctionComponent<BreadcrumbProps> = memo( ( { crumbs }  ) =>
{
	var Crumbs: JSX.Element[] = crumbs.map((item: string, ind: number) =>
	{
		if ((ind === crumbs.length - 1))
		{
			return(
				(item === '') ?
					<Skeleton
						key={item}
						variant='text'
						width={ 150 }
					/>
					: <BreadCrumbItem
						variant='subtitle2'
						color='inherit'
						key={item}
						underline='none' >
							{ BREADCRUMB_maps_ICON.get(item) }
							{ item }
					</BreadCrumbItem>
			)
		}

		return(
			<BreadCrumbItem
				variant='subtitle2'
				color='inherit'
				href={ NAME_maps_ROUTE[item.replace(' ', '')] }
				key={item} >
					{ BREADCRUMB_maps_ICON.get(item) }
					{ item }
			</BreadCrumbItem>
		)
	})

	return(
		<BreadCrumbsContent >
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label='breadcrumb' >
					{ Crumbs }
			</Breadcrumbs>
		</BreadCrumbsContent>
	)
})

export default Breadcrumb