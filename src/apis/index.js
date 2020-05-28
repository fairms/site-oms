import COMMON from './modules/common'
import LOGIN from './modules/login'
import ACCOUNTMANAGE from './modules/accountManage'
import POSITIONMANAGE from './modules/positionManage'
import HOMEMANAGE from './modules/homeManage'
import HOME from './modules/home'

/**
 * 所有接口引用入口
 */
const apis = {
    ...COMMON,
    ...LOGIN,
    ...ACCOUNTMANAGE,
    ...POSITIONMANAGE,
    ...HOMEMANAGE,
    ...HOME
}
export default apis
