var Name_Of_The_Guest_Array = [];
function submit() {
   var Guest_name = document.getElementById("Enter_name").value;
   Name_Of_The_Guest_Array.push(guest_name);
   document.getElementById("display_names").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function show_list() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("show_names").innerHTML = i.toString();
}
function sorting() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("sorted_names").innerHTML = i.toString();
}
function search() {
    var s = document.getElementById("search_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("search_names").innerHTML = "name found "+found+" time/s";
    console.log("found Name "+found+" Time/s");
}