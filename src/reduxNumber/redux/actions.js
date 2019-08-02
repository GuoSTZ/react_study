import { CALNUM } from "./actionType";

//包含所有的action creator
export const calNumCreater = (num) =>({type:CALNUM,data:num})
/**异步的操作 */
// export const addNameAsync = (name) =>{
//     return dispatch =>{
//         setTimeout(()=>{
//             dispatch(addNameCreater(name))
//         },2000);
//     }
// }