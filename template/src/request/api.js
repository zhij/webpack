import { get, post } from './http'

let apiList = {
    // 登录
    apiLogin: p => post('index.php?c=Bizkey|BizkeyApi&m=login', p)
}

export default apiList 