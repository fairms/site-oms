/**
 * 职位管理模块
 * */
import createAPI from '@/js/fetch'
const POSITIONMANAGE = {
    // 查询职位列表
    positionList: (data, $this, cancel) => createAPI('/position/findByWrapper', 'get', data, $this, cancel),
    // 删除职位列表
    deletePosition: (data, $this, cancel) => createAPI('/position/delete', 'DELETE', data, $this, cancel),
    // 职位发布状态
    updatePositionStatus: (data, $this, cancel) => createAPI('/position/status', 'post', data, $this, cancel),
    // 添加职位
    addPosition: (data, $this, cancel) => createAPI('/position/insert', 'POST', data, $this, cancel),
    // 更新职位
    updataPosition: (data, $this, cancel) => createAPI('/position/update', 'put', data, $this, cancel)
}
export default POSITIONMANAGE
