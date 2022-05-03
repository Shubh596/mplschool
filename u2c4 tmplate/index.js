// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", matchFun);
var myTeam= JSON.parse(localStorage.getItem("schedule")) || [];
function matchFun(){
    event.preventDefault()

    var teamObj ={
        num : masaiForm.matchNum.value,
        team1 : masaiForm.teamA.value,
        team2 : masaiForm.teamB.value,
        date : masaiForm.date.value,
        place : masaiForm.venue.value,
    }

    myTeam.push(teamObj)
    // console.log(myMatch)

    localStorage.setItem("schedule", JSON.stringify(myTeam))
}
