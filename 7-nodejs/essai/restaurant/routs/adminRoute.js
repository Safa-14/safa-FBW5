const express = require('express')
const fs = require('fs');
//const path = require('path');
//var busboy = require('connect-busboy');

function adminBurgerRouter(myMeals) {
    const adminRoute = express.Router()
    // adminRoute.configure(function(){
    //     adminRoute.use(express.methodOverride());
    //     adminRoute.use(express.bodyParser({keepExtensions:true,uploadDir:path.join(__dirname,'/files')}));
        
    //     });
    //adminRoute.use(busboy());
       // adminRoute.set('views', path.join(__dirname, 'views'));
    //ADD MEAL
    adminRoute.get('/addMeal', (req, res) => {
        res.render('adminAddMeal', {
            meals: myMeals
        })

    });


    //DELETE MEAL
    adminRoute.get('/deleteMeal', (req, res) => {
        res.render('adminDeleteMeal', {
            meals: myMeals
        })
    });


    adminRoute.post('/deleteMeal', (req, res) => {
        const idx = req.body.mealid
        //console.log(req.body.mealid);
        //var path = require('path');
        //var jsonPath = path.join(__dirname,'..', 'public', 'uploadedfiles', 'Apfel-Birne.png');
        //console.log(myMeals[idx].imgUrl);
        console.log(myMeals[idx].imgUrl);
        //console.log('/public'+myMeals[idx].imgUrl);
        
        //console.log(req.body.mealimg);
        try{
            fs.unlinkSync('./public'+myMeals[idx].imgUrl);
           } catch(err){
               console.log(err);
           }
        myMeals.splice(idx, 1)
        //console.log(myMeals);
        // './public/uploadedfiles/dices.png'
        // fs.unlinkSync('./public'+myMeals[idx].imgUrl,function () {
            
        // });
        //fs.unlinkSync(jsonPath);
        fs.writeFile('./meals.json', JSON.stringify(myMeals))
        res.sendStatus(200)

    });


    //send the new meal to the 
    adminRoute.post('/addMeal', (req, res) => {

        const mealTitle = req.body.mealTitle
        const mealPrice = req.body.mealPrice
        const mealDescription = req.body.mealDescription
console.log(req.files);

        if (mealTitle && mealPrice && mealDescription && req.files) {
            const mealImg = req.files.mealimg
            //get image extension
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))

            //move the uploaded file to public folder
            mealImg.mv('./public/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext).then(() => {
                let obj = {
                    title: mealTitle,
                    description: mealDescription,
                    imgUrl: '/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext,
                    price: mealPrice
                }

                myMeals.push(obj)
                fs.writeFileSync('./meals.json', JSON.stringify(myMeals)) //to write the new meal inside the meals.json
                res.redirect('/admin/addMeal') //to prevent posting the data every refresh
                //res.render('menu',{meals:meals})
            }).catch(error => {
                res.send(error.message);

            })
        }else {
            res.send('meal data is not complete')
        }


    });


    adminRoute.get('/editMeal', (req, res) => {
        res.render('adminEditMeal', {
            meals: myMeals
        })
    });

    adminRoute.post('/editMeal', (req, res) => {
        //console.log(req.body);
        myMeals[req.body.mealid].title = req.body.mealTitle
        myMeals[req.body.mealid].description = req.body.mealDescription
        myMeals[req.body.mealid].price = req.body.mealPrice
        
        
        console.log(req.files);
        //const mealImg = req.files.mealimg
        
        
        //myMeals[req.body.mealid].imgUrl = mealImg
        //res.sendStatus(200)
        // mealImg.mv('./public/uploadedfiles/' + + req.files.mealimg.name).then(() => {
        //     //redirect prevent resubmission again on refresh not like res.render
        //     //fs.writeFileSync('./meals.json', JSON.stringify(myMeals)) //to write the new meal inside the meals.json
        //     res.redirect('/admin/editMeal')
        // }).catch(error => {
        //     console.log(error);
        //     res.send(error.message);
            
        // })
    });

    return adminRoute
}



module.exports = {
    adminBurgerRouter
}