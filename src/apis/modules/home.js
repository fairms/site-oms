/**
 * 首页
 */
import createAPI from '@/js/fetch'
const HOME = {
    // 登录接口
    bannerSerch: (data, $this, cancel) => createAPI('/home/banner', 'get', data, $this, cancel)
}
export default HOME
