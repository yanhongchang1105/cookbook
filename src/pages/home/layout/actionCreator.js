import { SWITCHTAB } from './actionTypes'
export const syncSwitch = (checked) => {
    return {
        type: SWITCHTAB,
        checked
    }

}