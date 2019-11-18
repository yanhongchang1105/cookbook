import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { CookBook } from '../cookBook/'
import { Category } from '../category/'
import Map from '../map/Map'
import cookbook from 'assets/images/cookbook.png'
import cookbookActive from 'assets/images/cookbook-active.png'
import location from 'assets/images/location.png'
import locationActive from 'assets/images/location-active.png'
import menu from 'assets/images/menu.png'
import menuActive from 'assets/images/menu-active.png'
import more from 'assets/images/more.png'
import moreActive from 'assets/images/more-active.png'
import { withRouter } from 'react-router-dom'
import Profile from '../profile/Profile'
import connect from 'utils/connect'
@connect({
    mapState: (state) => {
        return {
            checked: state.getIn(['layout', 'checked'])
        }
    }
})
@withRouter
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cookbook',
            hidden: false,
            fullScreen: true,
        };
    }
    tmp = () => {
        let tabBars = [<TabBar.Item
            title="菜谱大全"
            key="cookbook"
            icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${cookbook}) center center /  28px 28px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${cookbookActive}) center center /  28px 28px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
                this.setState({
                    selectedTab: 'cookbook',
                });
            }}
            data-seed="logId"
        >
            <CookBook></CookBook>
        </TabBar.Item>,
        <TabBar.Item
            icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menu}) center center /  21px 21px no-repeat`
                }}
                />
            }
            selectedIcon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${menuActive}) center center /  21px 21px no-repeat`
                }}
                />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
                this.setState({
                    selectedTab: 'category',
                });
                this.props.history.push('/index/category');
            }}
            data-seed="logId1"
        >
            <Category></Category>
        </TabBar.Item>,
        <TabBar.Item
            icon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${location}) center center /  21px 21px no-repeat`
                }}
                />
            }
            selectedIcon={
                <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${locationActive}) center center /  21px 21px no-repeat`
                }}
                />
            }
            title="地图"
            key="map"

            selected={this.state.selectedTab === 'map'}
            onPress={() => {
                this.setState({
                    selectedTab: 'map',
                });
            }}
        >
            <Map></Map>
        </TabBar.Item>,
        <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
                this.setState({
                    selectedTab: 'profile',
                });
            }}
        >
            <Profile></Profile>
        </TabBar.Item>]
        !this.props.checked && tabBars.splice(2, 1)
        return tabBars
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {this.tmp()}
                </TabBar>
            </div>
        )
    }
}
export default Layout