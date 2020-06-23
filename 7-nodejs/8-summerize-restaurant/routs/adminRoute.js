const express = require('express')
const fs = require('fs');


function adminBurgerRouter(myMeals) {
    const adminRoute = express.Router()
    //build a middleware to check the session for all routes in /admin, /admin/blabla ...........
    adminRoute.use((req, res, next) => {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/')
        }
    });

    adminRoute.get('/', (req, res) => {
        console.log(req.session.user);
        res.render('admin')

    });

    //ADD MEAL
    adminRoute.get('/addMeal', (req, res) => {
        res.render('adminAddMeal',{
            meals: myMeals,
            check:true
        });

    });


    //DELETE MEAL
    adminRoute.get('/deleteMeal', (req, res) => {
        res.render('adminDeleteMeal', {
            meals: myMeals
        })
    });


    adminRoute.post('/deleteMeal', (req, res) => {
        const idx = req.body.mealid
        try {
            fs.unlinkSync('./public' + myMeals[idx].imgUrl);
        } catch (err) {
            console.log(err);
        }

        //console.log(req.body.mealid);
        myMeals.splice(idx, 1)
        console.log(myMeals);
        fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
        res.sendStatus(200)

    });


    //send the new meal to the 
    adminRoute.post('/addMeal', (req, res) => {
        const mealTitle = req.body.mealTitle
        const mealPrice = req.body.mealPrice
        const mealDescription = req.body.mealDescription
        const mealDetails = req.body.mealDetails

        // const check = myMeals.indexOf(mealTitle)
        // console.log(mealTitle);

        //console.log(check);
        // myMeals.forEach(meal => {
        //     const check = meal.indexOf(mealTitle)
        //     console.log(check);
        // });

        // (JSON.stringify(myMeals).indexOf(mealTitle) == -1)

        if (mealTitle && mealPrice && mealDescription && req.files) {
            //check if mealTitle is exist
            const foundMachMeal = myMeals.find(meal => meal.title == mealTitle)
            if (foundMachMeal) {
                //res.send('this meal is already exist');
                res.render('adminAddMeal',{
                    meals: myMeals,
                    check:false
                });
            }else {
                const mealImg = req.files.mealimg
            //get image extension
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))

            //move the uploaded file to public folder
            mealImg.mv('./public/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext).then(() => {
                let obj = {
                    title: mealTitle,
                    description: mealDescription,
                    imgUrl: '/uploadedfiles/' + mealTitle.replace(/ /g, '_') + myMeals.length + ext,
                    price: mealPrice,
                    details: mealDetails
                }

                myMeals.push(obj)
                fs.writeFileSync('./meals.json', JSON.stringify(myMeals)) //to write the new meal inside the meals.json
                res.redirect('/admin/addMeal') //to prevent posting the data every refresh
                //res.render('menu',{meals:meals})
            }).catch(error => {
                res.send(error.message);

            })
            }

            
        } else {
            res.send('This name exist')
        }


    });


    adminRoute.get('/editMeal', (req, res) => {
        res.render('adminEditMeal', {
            meals: myMeals
        })
    });

    adminRoute.post('/editMeal', (req, res) => {
        console.log(req.body);
        console.log(req.files);

        myMeals[req.body.mealid].title = req.body.mealTitle
        myMeals[req.body.mealid].description = req.body.mealDescription
        myMeals[req.body.mealid].price = req.body.mealPrice

        if (req.files) {
            console.log(req.files)
            const mealImg = req.files.imgFile
            // delete the old image file
            try {
                fs.unlinkSync("./public" + myMeals[req.body.mealid].imgUrl)
            } catch (error) {
                //console.log(error);

            }

            // get image extenstion
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))

            // move the new image to uploaded folder
            mealImg.mv('./public/uploadedfiles/' + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid) + ext).then(() => {
                myMeals[req.body.mealid].imgUrl = "/uploadedfiles/" + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid) + ext
                fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
                //res.sendStatus(200)
                res.json(myMeals[req.body.mealid].imgUrl)
            }).catch(error => {
                res.sendStatus(500)
            })
        } else {
            fs.writeFileSync('./meals.json', JSON.stringify(myMeals))
            //res.sendStatus(200)
            res.json(myMeals[req.body.mealid].imgUrl)
        }



    });


    adminRoute.post('/checkmealname',(req,res)=>{
        console.log(req.body);
        const foundedMeal = myMeals.find(meal => meal.title == req.body.mealtitle)
        if (foundedMeal) {
            res.json('exist')
        } else {
            res.json('notexist')
        }
    })

    return adminRoute
}



module.exports = {
    adminBurgerRouter
}