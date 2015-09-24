var express=require('express');
var app=express();
var bodyParser=require('body-parser');

//var mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost/account');

//var Mobile=require('./app/models/bear');
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var port=process.env.PORT || 30000;


/*var router=express.Router();
router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});


router.route('/record')

	.get(function(req, res) {

		var mobile = new Mobile();
		mobile.FIRSTNAME=req.query.FIRSTNAME;
		mobile.LASTNAME=req.query.LASTNAME;
		mobile.PASSWORD=req.query.PASSWORD;
		mobile.EMAIL=req.query.EMAIL;

		mobile.save(function(err, harry){

			if(err){
				res.send(err)
			}

			res.send(harry);

		})
	});


router.route('/delete')
	.delete (function(req, res) {


	var uid = req.body.FIRSTNAME;




	Mobile.remove({"FIRSTNAME":uid}, function(err, result) {

		if(err){
			res.send(err)
		}

		res.send(result);
	})


});
router.route('/update')
	.put (function(req, res) {

	var mobile = req.body.FIRSTNAME;
	var lastName = req.body.LASTNAME;
	var pwd = req.body.PASSWORD;
	var email= req.body.EMAIL;

	Mobile.update({"FIRSTNAME":mobile},{$set:{LASTNAME: lastName, PASSWORD: pwd, EMAIL: email}
	},


		function(err, result1) {

		if(err){
			res.send(err)
		}

		res.send(result1);
	})


});



router.route('/search')
	.get (function(req, res) {


	var firstName = req.query.FIRSTNAME;




	Mobile.find({"FIRSTNAME":firstName}, function(err, result1) {

		if(err){
			res.send(err)
		}

		res.send(result1);
		console.log("SEARCHING FOR RESULT COMPLETED..!"+ result1);


	})


});



app.use('/api',router);
*/
app.listen(port);



console.log('Server running on port '+port);
