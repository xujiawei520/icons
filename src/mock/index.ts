import Mock from "mockjs"

// 模拟 100 条数据
const data = Mock.mock({
  "list|100": [
    {
      "id|+1": 1,
      "name": "@cname",
      "address": "@city",
      "date": "@date"
    }
  ]
}).list

// 模拟 POST 请求
Mock.mock("/api/tablelist", "post", (options) => {
  const { pagesize = 10, page = 1 } = JSON.parse(options.body)
  const start = (page - 1) * pagesize
  const end = start + pagesize
  const pageData = data.slice(start, end)

  return {
    code: 200,
    message: "success",
    data: pageData,
    total: data.length
  }
})
