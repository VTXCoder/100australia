//static content
var content_en={
     title:         '100Australia.com.au',
     description:   '',
     author:        '',
     langauge:      'en',

     copyright:     '&copy; Shuya Pty Ltd 2012',

     nav:{
          home:          'Home',
          about:         'About', 
          contact:       'Contact Us',
          new_products:  'New Products',
          top_sellers:   'Top Sellers',
          sale:          'Sale & Specials',   
          searchProducts:  'Search Products'
     },

     left:{
          shop_category: 'Shop by category',
          shop_brand:    'Shop by brand',
          email_offer:   'Get special offers & more!'
     }
}

var content_cn = {
     title:         '100Australia.com.au',
     description:   '',
     author:        '',
     langauge:      'zh-cn',

     copyright:     '&copy; Shuya Pty Ltd 2012',

     nav:{
          home:          '首页',
          about:         '关于', 
          contact:       '联系',
          new_products:  '新品',
          top_sellers:   '热销产品',
          sale:          '特价区',  
          searchProducts:  '产品搜索'
     },

     left:{
          shop_category: '商品分类',
          shop_brand:    '品牌专区',
          email_offer:   '取得最新优惠和促销通知'
     }     
}

var content_tw = {
     title:         '100Australia.com.au',
     description:   '',
     author:        '',
     langauge:      'zh-tw',

     copyright:     '&copy; Shuya Pty Ltd 2012',

     nav:{
          home:          'Home',
          about:         'About', 
          contact:       'Contact Us',
          new_products:  'New Products',
          top_sellers:   'Top Sellers',
          sale:          'Sale & Specials',  
          results:       'Results', 
          searchProducts:  'Search Products',
          signin:        'Sign In'
     },

     left:{
          shop_category: 'Shop by category',
          shop_brand:    'Shop by brand',
          email_offer:   'Get special offers & more!'
     }     
}

var content = {
     en: content_en,
     cn: content_cn,
     tw: content_tw
}

exports.getContent=function(language) {
 
     return content[language.toLowerCase()];
}