var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //数据
  var data = {
      title: '流动衣橱',
      time: (new Date).toString(),
      list: [
          {
              id: '1',
              name: '帽子'
          },
          {
              id: '2',
              name: '上衣'
          },
          {
              id: '3',
              name: '下装'
          },
          {
              id: '4',
              name: '鞋子'
          },
          {
              id: '',
              name: ''
          }
      ],
      clothes: [
          {
              name: '111',
              img: '111.png'
          },
          {
              name: '222',
              img: '222.png'
          },
          {
              name: '333',
              img: '333.png'
          }
      ]
  };

  //渲染模板
  res.render('home.art', data);
});

module.exports = router;
