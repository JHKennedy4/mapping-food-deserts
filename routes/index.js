/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mapping Urban Food Deserts' });
};
