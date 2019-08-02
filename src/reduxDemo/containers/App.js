import React from 'react'
import {connect} from 'react-redux'
import {addNameCreater,addAgeCreater,addNameAsync} from '../redux/actions'
import AddName from '../component/AddName'
export default connect(
    /**将 变量 和 组件 关联起来 */
    state => ({
        lastname:state.addName,
        lastage:state.addAge
    }),
    {addNameCreater,addAgeCreater,addNameAsync}
)(AddName)