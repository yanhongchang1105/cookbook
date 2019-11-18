import React, { Component } from 'react'
import Header from './Header'
import Swiper from '../../swiper/container/Swiper'
import HotCategory from '../../hotcategory/container/HotCategory'
import Search from 'components/search/Search'
import Top10 from '../../top10/container/Top10'
import { CookbookWrap } from './StyledCookBook'
export default class CookBook extends Component {
    render() {
        return (
            <CookbookWrap>
                <Header></Header>
                <div>
                    <Swiper></Swiper>
                    <Search hasBorder={true} radius={5} color="#ee742f" width={'1px'}></Search>
                    <HotCategory></HotCategory>
                    <Top10></Top10>
                </div>

            </CookbookWrap >
        )
    }
}
