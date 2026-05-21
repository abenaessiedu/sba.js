//Objectives

// Employ basic JavaScript syntax accurately.
// Implement control flow structures such as conditionals and loops effectively.
// Use arrays and objects to organize and manage data.
// Develop functions to create reusable code.
// Utilize loops and iteration to navigate through data collections.
// Implement error handling to manage potential code failures gracefully.

const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      //assignment number 1 
      id: 1,
      //name of the assignment 
      name: "Declare a Variable",
      //date that the assignment is due 
      due_at: "2023-01-25",
      //possible points you can earn on the assignment 
      points_possible: 50
    },
    {
      //assignment number 2 
      id: 2,
      // name of the assignment 
      name: "Write a Function",
      // date that the assignment is due 
      due_at: "2023-02-27",
      // possible points that you can earn on the assignment 
      points_possible: 150
    },
    {
      //assignment number 3 
      id: 3,
      //the name of the assignment 
      name: "Code the World",
      //the date that the assignment is due 
      due_at: "3156-11-15",
      //possible points that you can earn on the assignment 
      points_possible: 500
    }
  ]
};
// The provided learner submission data.
const LearnerSubmissions = [
  {//this is learner #1 
    learner_id: 125,
    //this is learner #1 and their assignment #1 
    assignment_id: 1,
    //this is learner #1's submission information 
    submission: {
      //this is when learner #1 submitted assignment #1 
      submitted_at: "2023-01-25", //they submitted the assignment on time 
      //this is the score that they got// they got a 47/50 
      score: 47
    }
  },
  {// this is learner #1 
    learner_id: 125,
    // this is learner #2 and their assignment #2 
    assignment_id: 2,
    // this is learner #1's submission information  
    submission: {
      //this is when learner #1 submitted assignment #2 
      submitted_at: "2023-02-12", //they submitted the assignment early/on time 
      //this is  the score they got--they got a 150/150 
      score: 150
    }
  },
  {
    // this is learner #1 
    learner_id: 125,
    // this is learner #2 and their assignment #3
    assignment_id: 3,
    // this is learner #1's submission information  
    submission: {
      //this is when learner #1 submitted assignment #3 
      submitted_at: "2023-01-25", //they submitted this way ahead of time 
      score: 400 //this is the score they got: 400/500
    }
  },// this is the end of learner #1's data 

  { //this is learner #2 
    learner_id: 132,
    // this is learner #2 and their assignment #1 
    assignment_id: 1,
    // this is learner #2's submission information 
    submission: {
      //this is when learner #2 submitted assignment #1 
      submitted_at: "2023-01-24", // they submitted this ahead of time 
      score: 39 //this is the score learner #2 recieved :39/50 
    }
  },
  { //this is learner #2 
    learner_id: 132,
    // this is learner #2 and their assignment #2
    assignment_id: 2,
    // this is learner #2's submission information 
    submission: {
      //this is when learner #2 submitted assignment #2 
      submitted_at: "2023-03-07", // they submitted way late. 
      score: 140 // //this is the score learner #2 recieved: 140/500
    }
  }
];

























//this is where we build an 
//  const learner_id125 = [
//     { assignment1: "Declare a Variable", duedate: "2023-01-25", datesubmitted: "2023-01-25", score: 47/50 } , 
//     { assignment2: "Write a Function",  duedate: "2023-02-27", datesubmitted: "2023-02-12" , score: 150/150 } , 
//     { assignment3: "Code the World", duedate: "3156-11-15" , datesubmitted: "2023-01-25", score: 400/500 }, 
//  ]
//  const learner_id132 = [
//     { assignment1: "Declare a Variable", duedate: "2023-01-24", datesubmitted: "2023-01-25", score: 47/50 } , 
//     { assignment2: "Write a Function",  duedate: "2023-02-27", datesubmitted: "2023-03-07", score: 150/150 } , 
//     { assignment3: "Code the World", duedate: "3156-11-15" , datesubmitted: "", score: }, 
//  ]









//  const learner_id132 = student2 

// //this is the due date for assignment 1 
// const assignment1SubmissionDate = 


// //this is the due date for assignment 2 
// const assignment2SubmissionDate =


// //this is the due date for assignment 3 
// const  assignment3SubmissionDate= 

// //something for scores and learners 
// const student1 = {
//     name: , score: 
//     //assignment name : , score: 
// }



// THIS IS THE END RESULT. NOW WE BUILD THE CODE TO GET HERE 

function pointsPossible(agArray, assignment_id,) {
  for (let j = 0; j < agArray.length, j++;)
    if (agArray[j].id == assignment_id) {
      console.log("points_possible: " + agArray[j].points_possible)
      console.log("Inside the Function")
      return agArray[j].points_possible
      break;
    }
}


function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  const result = []

  //keep track of learner ids 
  const ids = [];
  //This is where we build the code to get the answer
  //

  // 1. find unique learners (figuring out how many learners there are (and how many report objects do we need))
  for (let sub of submissions) {
    //checks for the learner id in the array (specifically index)
    if (ids.includes(sub.learner_id) === false) {
      ids.push(sub.learner_id)
    }

  }
  console.log(ids);
  //2. create our learner object
  for (let learnerId of ids) {
    console.log(learnerId)

    //need a variable to store totals 

    let score = 0; 
    let totalPossible = 0

    for (let i = 0; i < submissions.length, i++;) {
      if (learnerId === submissions[i].learnerId) {
        console.log(submissions[i].submission.score)
        score += submission[i].submission.score
        pointsPossible(ag.assignments, submission[i].assignment_id)
        


        console.log("points_possible: " = ag.assignments[0].points_possible)


          for(let j=0; j < ag.assignments.length, j++)
        if (ag.assignments[0].id == submissions.[i].assignment_id ){
          console.lg('They Match!')
          console.log ("points_possible: " +ag.assignments[j].points_possible)
        }  break; 


      }
    }
  }
  console.log("total score: " + score)

}


    {
let learnerReport = {
  id: learnerId
}
result.push(learnerReport);
  }

return result;

//3.  the average + the weighted avg 
const grades = [47, 150];
const grades2 = [39, 140];
const gradesPossible = [50, 200];


function getAvg(grades) {
  if (grades.length === 0) return 'Empty grades array';
  return grades.reduce((acc, c) => acc + c, 0) / grades.length;
} 

console.log(getAvg(grades));
console.log(getAvg(grades2));
 
function getAvg(grades) {
  try {
    if (!Array.isArray(grades)){
      throw new Error("Something's not right!"); 
    }
    if (grades.length === 0){
      throw new Error("Can't find the grades!")
    }
    const sum = grades.reduce((acc, grade) => acc + grade, 0); 
    return sum/ grades.length; 
  } catch (error) {
    console.log("Error:", error.message); 
    return 0; 
  }
}


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log (result)

//   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];

  //   return result;
  // }
