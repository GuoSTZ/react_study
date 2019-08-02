//包含n个reducer函数的模块
import {CALNUM} from './actionType'
import {combineReducers} from 'redux'

function calNum(state=0,action){ //形参默认值--初始化
    switch(action.type){
        case CALNUM:{
            return action.data
        }   
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    calNum
})