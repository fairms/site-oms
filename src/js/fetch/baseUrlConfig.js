const config = {
    // 如需使用yapi的mock数据 请将打开以下注释
    '192.168.9.145': {
        baseUrl: 'http://192.168.9.167:9999/api'
    },
    '172.16.3.151': {
        baseUrl: 'http://192.168.9.167:9999/api'
    },
    'localhost': {
        baseUrl: 'http://192.168.6.7:3000/mock/172'
    }
}

const configParams = config[location.hostname]

if (configParams) {
    window.baseUrl = configParams.baseUrl
}

const baseUrl = window.baseUrl

export default baseUrl
