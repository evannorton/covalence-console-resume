function displayPosition(company, job, desc) {
    console.log(job + " at " + company + " - " + desc);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("BAM: " + skill);
    } else {
        console.log(skill);
    }
}

console.log("Evan Norton".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: A pretty cool dude");
console.log("My Interests (in order)");
console.log("* wife");
console.log("* music");
console.log("* programming");
console.log("* video games");