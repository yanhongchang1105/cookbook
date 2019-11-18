import styled from 'styled-components'
//line 默认超出一行显示省略号

function ellipsis(line) {
    if (Math.abs(line) > 1) {
        return `
          display: -webkit-box !important;
          -webkit-line-clamp: ${line};
          -webkit-box-orient: vertical;
          flex-direction: column;
          ${wrap(true)}
        `
    } else {
        return wrap(false)
    }
}
function wrap(isWrap = true) {
    if (isWrap) {
        return `
          word-wrap: break-word;
          word-break: break-all;
        `
    } else {
        return `
          white-space: nowrap;
        `
    }
}
export const cbellipsis = ({
    comp,
    width = 0,
    line = 1
}) => {
    return styled(comp)`
     overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    ${ellipsis(line)}
    `
}
