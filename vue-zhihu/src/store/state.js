export default {
  isFirstLoad: true, // 是否第一次加载
  stories: [],  // 新闻内容数组
  ids: [],  // 新闻id数组,
  id: '',  // 当前新闻详情的id
  nextId: '', // 下一篇新闻的id
  popularity: 0, // 点赞总数
  newsType: -1  // 新闻内容类型 0 普通新闻， 1 主题新闻, 2 收藏新闻
}
