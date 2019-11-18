import React from 'react'
import Header from '../header/HeaderContainer'
import Search from 'components/search/Search'
import Menu from 'components/menu/MenuContainer'
import { CategoryWrap } from './styledCategory'
import { Route } from 'react-router-dom'
export default function CategoryUI() {
    return (
        <CategoryWrap>
            <Header></Header>
            <Search
                hasBorder={true}
                radius={6}
                width={0}
                background={'#eee'}
            ></Search>
            <div className="cate-list">
                <Route path='/index/category' children={() => {
                    return <Menu type="category"></Menu>
                }}>
                </Route>
                <Route path='/index/material' children={() => {
                    return <Menu type="material"></Menu>
                }}>
                </Route>
            </div>

        </CategoryWrap>
    )
}


