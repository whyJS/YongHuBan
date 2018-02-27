// 引入storage插件
import storage from 'good-storage'

//api
//提取去支付
export function Api(){
  return ''
}


const SHOPPING_CART_KEY = '__shoppingCart__'//购物车历史key
const SHOPPING_CART_MAX_LEN = 15      //购物车历史长度

const STORE_CART_KEY = '__storeCart__'//购物车历史key
const STORE_CART_MAX_LEN = 150      //购物车历史长度
//团购结算商品
const STORE_GOOD_KEY = '__storeGood__'//购物车历史key
const STORE_GOOD_MAX_LEN = 150      //购物车历史长度
//添加定位地址
const LOCATION_KEY = '__location__'//定位地址
//添加收货地址
const ADDRESS_KEY = '__address__'//收货地址

//保存个人信息
const MINE_KEY = '_mine_'//个人信息
//保存收货地址
const PROFILE_KEY = '_profile_'  //收货地址
//保存结算（0,正常结算1去付款2再来一单）
const SDJ_KEY = '_sdj_'
//去支付
const GO_KEY = '_gosdj_'
//地址搜索历史
const SEARCH_KEY = '__search__'//搜索历史k
const SEARCH_MAX_LEN = 15      //搜索历史长度
//商品搜索历史
const SEARCH_GOODS_KEY = '__searchgoods__'//商品搜索历史k
const SEARCH_GOODS_MAX_LEN = 15      //商品搜索历史长度

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
//if (index === 0) {
//  return
//}
  if (index >= 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

// 添加购物车历史(团购)
export function saveStoreCart(query) {
  let shopping = storage.session.get(STORE_CART_KEY, [])
  insertArray(shopping, query, (item) => {
    return item.goodsid=== query.goodsid
  }, STORE_CART_MAX_LEN)
  storage.session.set(STORE_CART_KEY, shopping)
  return shopping
}
// 从本机中提取购物车（团购）
export function loadStoreCart(){
  return storage.session.get(STORE_CART_KEY,[])
}
//清空
export function clearStoreCart(){
  return storage.session.remove(STORE_CART_KEY)
}

// 添加购物车历史
export function saveShoppingCart(query) {
  let shopping = storage.session.get(SHOPPING_CART_KEY, [])
  insertArray(shopping, query, (item) => {
    return item.goodsid=== query.goodsid
  }, SHOPPING_CART_MAX_LEN)
  storage.session.set(SHOPPING_CART_KEY, shopping)
  return shopping
}
// 从本机中提取购物车
export function loadShoppingCart(){
  return storage.session.get(SHOPPING_CART_KEY,[])
}



// 添加购物车历史(团购)
export function saveStoreGood(query) {
  storage.session.set(STORE_GOOD_KEY, query)
  return query
}
// 从本机中提取购物车（团购）
export function loadStoreGood(){
  return storage.session.get(STORE_GOOD_KEY,[])
}



//添加定位地址
export function saveLocation(location) {
  storage.session.set(LOCATION_KEY, location)
  return location
}
//提取定位地址
export function loadAddress(){
  return storage.session.get(ADDRESS_KEY,{})
}
//添加收货地址
export function saveAddress(address) {
  storage.session.set(ADDRESS_KEY, address)
  return address
}
//提取收货地址
export function loadLocation(){
  return storage.session.get(LOCATION_KEY,{})
}


//添加个人信息
export function saveMine(mine) {
  storage.session.set(MINE_KEY, mine)
  return mine
}
//提取个人信息
export function loadMine(){
  return storage.session.get(MINE_KEY,{})
}

//添加收货地址
export function saveProfile(profile) {
  storage.session.set(PROFILE_KEY, profile)
  return profile
}
//提取收货地址
export function loadProfile(){
  return storage.session.get(PROFILE_KEY,{})
}


//添加结算方式
export function saveSdj(profile) {
  storage.session.set(SDJ_KEY, profile)
  return profile
}
//提取结算方式
export function loadSdj(){
  return storage.session.get(SDJ_KEY,'0')
}

//添加去支付
export function saveGoSdj(profile) {
  storage.session.set(GO_KEY, profile)
  return profile
}
//提取去支付
export function loadGoSdj(){
  return storage.session.get(GO_KEY,{})
}

// 添加搜索历史
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LEN)
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 从本机中提取值
export function loadSearch(){
  return storage.get(SEARCH_KEY,[])
}
// 清空搜索历史
export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}

// 添加搜索历史
export function saveGoodsSearch(query) {
  let searches = storage.get(SEARCH_GOODS_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_GOODS_MAX_LEN)
  storage.set(SEARCH_GOODS_KEY, searches)
  return searches
}
// 从本机中提取值
export function loadGoodsSearch(){
  return storage.get(SEARCH_GOODS_KEY,[])
}
// 清空搜索历史
export function clearGoodsSearch() {
  storage.remove(SEARCH_GOODS_KEY)
  return []
}