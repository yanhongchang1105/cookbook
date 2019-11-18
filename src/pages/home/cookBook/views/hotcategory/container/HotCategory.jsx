import React, { Component } from 'react'
import { get } from 'utils/http.js'
import HotHotCategoryUI from '../ui/HotCategoryUI'
import { withRouter } from 'react-router-dom'
@withRouter
class HotCategory extends Component {
  state = {
    data: []
  }
  handelClick = (text) => {
    this.props.history.push('/list', { text })
  }
  async componentDidMount() {
    let rs = await get('/api/hot');
    let newData = rs.data.map((value, index) => {
      return {
        icon: value.img,
        text: value.title
      }
    })
    this.setState({
      data: newData
    })
  }
  render() {
    return (
      <HotHotCategoryUI onClick={this.handelClick} data={this.state.data}></HotHotCategoryUI>
    )
  }
}
export default HotCategory
