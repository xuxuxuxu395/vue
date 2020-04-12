import axiosIns from "./axios"; //发送请求需要的工具
import config from "./config";  //发送请求需要的配置(原材料)
import httpUtil from "@/util/http.js";

export default httpUtil(axiosIns,config)
