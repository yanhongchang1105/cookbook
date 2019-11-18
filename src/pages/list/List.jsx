import React, { Component } from 'react'
import { NavBar, Icon, ListView } from 'antd-mobile';
import { get } from 'utils/http'
import { ListWrap, ListItem, H3Wrap } from './styled'
export default class List extends Component {
    constructor(props) {
        super(props)
        this._limit = 10
        this._pageno = 1
    }
    state = {
        list: [],
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        isLoading: true,
        hasMore: true
    }
    async getData() {
        let rs = await get(`/list/data?_page=${this._pageno}&_limit=${this._limit}`);
        console.log(rs);
        if (rs.length === 0) {
            this.setState({
                hasMore: false
            })
            return
        }
        this.setState((state) => {
            let list = [...state.list,
            ...rs]
            return {
                list,
                dataSource: this.state.dataSource.cloneWithRows(list),
                isLoading: false
            }
        })
    }
    async componentDidMount() {
        this.getData();
    }
    row(value, index) { //渲染函数 这里是每一条数据
        return (

            <ListItem key={value.id + index}>
                <div>
                    <img style={{ width: '1.15rem', height: '.75rem' }} src={value.img} alt="" />
                </div>
                <div>
                    <h2>{value.name}</h2>
                    <H3Wrap>{value.burdens}</H3Wrap>
                    <h4>{value.all_click}浏览 {value.favorites}收藏</h4>
                </div>
            </ListItem>
        )
    }
    onEndReached = async (event) => { //滑动到底部
        if (this.state.isLoading && !this.state.hasMore) {
            return
        }

        this._pageno++

        this.setState({ isLoading: true })

        this.getData()
    }
    render() {
        return (
            <ListWrap>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.location.state.text}</NavBar>
                <ul className="list">
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {!this.state.hasMore ? '到底了' : this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>)}
                        renderRow={this.row}
                        pageSize={4}
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </ul>
            </ListWrap>
        )
    }
}
