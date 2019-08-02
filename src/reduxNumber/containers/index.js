import {connect} from 'react-redux'
import {calNumCreater} from '../redux/actions'
import ControlNumber from '../component/ControlNumber'
export default connect(
    /**将 变量 和 组件 关联起来 */
    state => ({
        lastnum:state.calNum,
    }),
    {calNumCreater}
)(ControlNumber)