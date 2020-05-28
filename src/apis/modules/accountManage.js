/**
 * 后台账号管理模块
 */
import createAPI from '@/js/fetch'
const ACCOUNTMANAGE = {
    // 查询账号
    queryAllOperatorRole: (data, $this, cancel) => createAPI('/users/findAll', 'get', data, $this, cancel),
    // 查询所有分组
    queryAllSysRoleName: (data, $this, cancel) => createAPI('/user/findByWrapper', 'get', data, $this, cancel),
    // 添加账户
    queryAddUsers: (data, $this, cancel) => createAPI('/users/insert', 'post', data, $this, cancel),
    // 修改账号
    addOrUpdateOperator: (data, $this, cancel) => createAPI('/users/update', 'put', data, $this, cancel),
    // 更新账户状态（冻结/解冻）
    updateOperatorStatus: (data, $this, cancel) => createAPI('/user/updatePositionStatus', 'post', data, $this, cancel),
    // 删除账户
    deleteOperator: (data, $this, cancel) => createAPI('/users/delete', 'DELETE', data, $this, cancel)
}
export default ACCOUNTMANAGE
