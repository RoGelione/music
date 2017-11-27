import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

export function getSingerList(){
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
	
	const data = Object.assign({},commonParams,{
		
		channel:'singer',
		page:'list',
		key:'all_all_all',
		pagesize:100,
		pagenum:1,
		hostUin:1,
		platform:'yqq',
		needNewCode:0,
		g_tk:2089545832
	})
	return jsonp(url,data,options)
}