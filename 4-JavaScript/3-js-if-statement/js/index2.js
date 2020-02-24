let grade = -5

// if (grade >= 50)
// {
//     console.log("You passed")
// }
// else
// {
//     console.log("You failed")
// }


// if (grade >= 0 && grade < 50)
// {
//     console.log("Failed")
// }
// else if (grade >= 50 && grade < 60)
// {
//     console.log("Good")
// }
// else if (grade >= 60 && grade < 80)
// {
//     console.log("Very Good")
// }
// else if (grade >= 80 && grade <= 100)
// {
//     console.log("Excellent")
// }
// else {
//     console.log("out of merge")
// }


if (grade >= 0 && grade < 50){
    console.log("Failed")
}else {
    if (grade < 60 && grade >= 50){
        console.log("Good")
    }else {
        if ( grade < 80 && grade >= 60){
            console.log("Very Good")
        }else {
            if (grade <= 100 && grade >= 80){
                console.log("Excellent")
            }else {
                console.log("out of merge")
            }
            
        }
        
    }
}



