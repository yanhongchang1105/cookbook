import React, { Component } from 'react'
import MenuUI from './MenuUI'
import { get } from 'utils/http.js'
import CateTransition from '../hoc/cateTransition'
class MenuContainer extends Component {
    state = {
        menu: null,
        tab: '',
        initTab: this.props.type === 'category' ? "热门" : '肉类'
    }
    async componentDidMount() {
        let rs = await get('/api/category');
        this.setState({
            menu: rs.data,
        })
    }
    handleChange(tab) {
        this.setState({
            tab
        })
    }
    render() {
        let tab = this.state.tab || this.state.initTab;
        let data = this.state.menu ? this.state.menu[this.props.type] : {};
        let tabs = Object.keys(data);
        let contents = data[tab] || [];
        return (
            <MenuUI
                handleClick={this.handleChange.bind(this)}
                tab={tab}
                tabs={tabs}
                contents={contents}
            ></MenuUI>
        )
    }
}
export default CateTransition(MenuContainer)
