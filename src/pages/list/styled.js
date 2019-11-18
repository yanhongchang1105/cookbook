import styled from 'styled-components'
import border from 'components/styled/border'
import { cbellipsis } from 'components/styled/ellipsis'
export const ListWrap = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    .list{
        flex:1;
        overflow-y:scroll;
    }
    .am-navbar {
    background: #ee742f;
  }
  .am-list-view-scrollview{
      height:100%;
  }
`

export const ListItem = border({
  comp: styled.li`
padding:.1rem;
display:flex;
>div:first-child {
  width: 1.4rem;
  img{
      border-radius:0.08rem;
  }
}
>div:last-child{
    flex:1;
    overflow:hidden;
    h2 {
    font-size: .2rem;
  }
  
  h4 {
    font-size: .12rem;
    font-weight: 100;
    color: #666;
    line-height: .24rem;
  }
}
`,
  width: '0 0 1px 0',
  radius: '0px',
})
export const H3Wrap = cbellipsis({
  comp: styled.h3`
        font-size: .16rem;
        font-weight: 100;
        color: #666;
        line-height: .24rem;
  `,
  width: '100%',
  line: 2
})