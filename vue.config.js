
module.exports = {
//   devServer:{
//     proxy:{
//       '/bigscreen':{
//         target: 'http://repair.yck12.com/',
//         changOrigin:true,
//         pathRewrite:{'^/bigscreen':''}
//       }
//     }
//   },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}

