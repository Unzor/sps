function solve_proportion(h) {
h = h.split("\n");
var s1 = [];
var s2 = [];
h.forEach(function(a, i){
i = i + 1;
if (a !== "") {
if (a !== "- = -") {
if (i == 2) {
s1.push(a.split("   ")[0]);
s1.push(a.split("   ")[1]);
} else if (i == 4){
s2.push(a.split("   ")[0]);
s2.push(a.split("   ")[1]);}
}
}
})

var r1 = s1[0] + s2[1] + " = " + s2[0] * s1[1]

var r2 = r1.split(" = ")
return r2[1] / r2[0].slice(0, -1)
}
