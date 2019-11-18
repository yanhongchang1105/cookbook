
import React, { Component } from 'react'
import { List, Switch } from 'antd-mobile';
import { syncSwitch } from '../layout'
import connect from 'utils/connect'
@connect({
    mapState: (state) => {
        return {
            checked: state.profile.checked
        }
    },
    mapDispatch: (dispatch) => {
        return {
            change: (checked) => {
                dispatch(syncSwitch(checked))
            }
        }
    }
})
class Profile extends Component {
    render() {

        return (
            <div>
                <List.Item
                    extra={<Switch
                        checked={this.props.checked}
                        onChange={(checked) => {
                            this.props.change(checked)
                        }}
                    />}
                >是否显示美食地图</List.Item>
            </div >
        )
    }
}
export default Profile