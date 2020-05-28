/**
 * banner管理模块
 */
import createAPI from '@/js/fetch'
const HOMEMANAGE = {
    // banner列表
    bannerList: (data, $this, cancel) => createAPI('/home/findByWrapper', 'get', data, $this, cancel),
    // 添加banner图或视频
    addBanner: (data, $this, cancel) => createAPI('/home/insert', 'post', data, $this, cancel),
    // 删除banner图
    deleteBanner: (data, $this, cancel) => createAPI('/home/delete', 'DELETE', data, $this, cancel),
    // 编辑banner图
    editBanner: (data, $this, cancel) => createAPI('/banner/update', 'put', data, $this, cancel),
    // 查询所有
    findAllBanner: (data, $this, cancel) => createAPI('/banner/findAll', 'get', data, $this, cancel)
}
export default HOMEMANAGE
