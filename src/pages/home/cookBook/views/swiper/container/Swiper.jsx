import React, { Component } from 'react'
import { connect } from 'react-redux'
import SwiperUI from '../ui/SwiperUI'
import { asyncLoadData } from '../../../ActionCreator'

const mapState = (state) => {
    return {
        list: state.cookbook.list
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch(asyncLoadData())
        }
    }
}
class Swiper extends Component {
    async componentDidMount() {
        this.props.loadData()
    }


    render() {
        return (
            <SwiperUI {...this.props}></SwiperUI>
        )
    }
}
export default connect(mapState, mapDispatch)(Swiper)
