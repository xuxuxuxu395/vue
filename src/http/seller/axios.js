import axios from "axios";
import config from "./config"

//创建axios实例
const axiosIns = axios.create({
  baseURL:config.baseUrl||"",
  timeout:config.timeout||5000,
});

//为axios实例添加拦截器
axiosIns.interceptors.request.use(axiosConfig => {
  config.hooks && config.hooks.beforeReq && config.hooks.beforeReq.call(config)
  return axiosConfig;
})
axiosIns.interceptors.response.use((response)=>{
  config.hooks && config.hooks.afterReqSuccess && config.hooks.afterReqSuccess.call(config,response.data)
  return response.data;
},(error)=>{
  config.hooks && config.hooks.afterReqFail && config.hooks.afterReqFail.call(config)
  return Promise.reject(error)
})

//将axios实例暴露出去
export default axiosIns;
