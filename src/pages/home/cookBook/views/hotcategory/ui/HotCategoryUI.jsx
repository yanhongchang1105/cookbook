import React from 'react'
import { Grid } from 'antd-mobile'
import { GridWrap } from './StyledCookBook'
export default function HotCategoryUI(props) {
  return (
    <GridWrap>
      <div className="title">热门分类</div>
      <Grid
        data={props.data}
        columnNum={3}
        hasLine={false}
        onClick={(el) => {
          props.onClick(el.text)
        }}
        renderItem={dataItem => (
          <div className="item">
            <img src={dataItem.icon} alt="" />
            <div>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
      />
    </GridWrap>
  )
}

