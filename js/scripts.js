function generateMealPlan() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    if (!validateEmail(email)) {
        alert("Enter valid email address.");
        return;
    }

let introText = `
    <h3>${name}'s Meal Plan for the Week</h3>
    <p>Goal for the week: ${goal}</p>
`;

document.getElementById("intro").innerHTML = introText;

document.getElementById("meals").style.display = "block";
document.getElementById("reset").style.display = "inline-block";
document.getElementById("print").style.display = "inline-block";

document.getElementById("print").addEventListener('click',myWindow)

    function myWindow() {
        mondayBreakfast = document.getElementById("monday_breakfast").value;
        mondaySnack1 = document.getElementById("monday_snack1").value;
        mondayLunch = document.getElementById("monday_lunch").value;
        mondaySnack2 = document.getElementById("monday_snack2").value;
        mondayDinner = document.getElementById("monday_dinner").value;
        tuesdayBreakfast = document.getElementById("tuesday_breakfast").value;
        tuesdaySnack1 = document.getElementById("tuesday_snack1").value;
        tuesdayLunch = document.getElementById("tuesday_lunch").value;
        tuesdaySnack2 = document.getElementById("tuesday_snack2").value;
        tuesdayDinner = document.getElementById("tuesday_dinner").value;
        wednesdayBreakfast = document.getElementById("wednesday_breakfast").value;
        wednesdaySnack1 = document.getElementById("wednesday_snack1").value;
        wednesdayLunch = document.getElementById("wednesday_lunch").value;
        wednesdaySnack2 = document.getElementById("wednesday_snack2").value;
        wednesdayDinner = document.getElementById("wednesday_dinner").value;
        thursdayBreakfast = document.getElementById("thursday_breakfast").value;
        thursdaySnack1 = document.getElementById("thursday_snack1").value;
        thursdayLunch = document.getElementById("thursday_lunch").value;
        thursdaySnack2 = document.getElementById("thursday_snack2").value;
        thursdayDinner = document.getElementById("thursday_dinner").value;
        fridayBreakfast = document.getElementById("friday_breakfast").value;
        fridaySnack1 = document.getElementById("friday_snack1").value;
        fridayLunch = document.getElementById("friday_lunch").value;
        fridaySnack2 = document.getElementById("friday_snack2").value;
        fridayDinner = document.getElementById("friday_dinner").value;
        saturdayBreakfast = document.getElementById("saturday_breakfast").value;
        saturdaySnack1 = document.getElementById("saturday_snack1").value;
        saturdayLunch = document.getElementById("saturday_lunch").value;
        saturdaySnack2 = document.getElementById("saturday_snack2").value;
        saturdayDinner = document.getElementById("saturday_dinner").value;
        sundayBreakfast = document.getElementById("sunday_breakfast").value;
        sundaySnack1 = document.getElementById("sunday_snack1").value;
        sundayLunch = document.getElementById("sunday_lunch").value;
        sundaySnack2 = document.getElementById("sunday_snack2").value;
        sundayDinner = document.getElementById("sunday_dinner").value;
        
        myText = ("<html>\n<head>\n<title>Your Meal Plan</title>\n</head>\n<body>\n");
        myText += ("<table>\n<tr>\n<th>Day\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</th>\n<th>Breakfast\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\</th>\n<th>Snack\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</th>\n<th>Lunch\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</th>\n<th>Snack\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</th>\n<th>Dinner\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</th>\n</tr>\n<tr>\n<td>Monday:</td>\n<td>" + mondayBreakfast + "</td>\n<td>" + mondaySnack1 + "</td>\n<td>" + mondayLunch + "</td>\n<td>" + mondaySnack2 + "</td>\n<td>" + mondayDinner + "</td>\n</tr>\n");
        myText += ("<tr>\n<td>Tuesday:</td>\n<td>" + tuesdayBreakfast + "</td>\n<td>" + tuesdaySnack1 + "</td>\n<td>" + tuesdayLunch + "</td>\n<td>" + tuesdaySnack2 + "</td>\n<td>" + tuesdayDinner + "</td>\n</tr>\n");
        myText += ("<td>Wednesday:</td>\n<td>" + wednesdayBreakfast + "</td>\n<td>" + wednesdaySnack1 + "</td>\n<td>" + wednesdayLunch + "</td>\n<td>" + wednesdaySnack2 + "</td>\n<td>" + wednesdayDinner + "</td>\n</tr>\n");
        myText += ("<td>Thursday:</td>\n<td>" + thursdayBreakfast + "</td>\n<td>" + thursdaySnack1 + "</td>\n<td>" + thursdayLunch + "</td>\n<td>" + thursdaySnack2 + "</td>\n<td>" + thursdayDinner + "</td>\n</tr>\n");
        myText += ("<td>Friday:</td>\n<td>" + fridayBreakfast + "</td>\n<td>" + fridaySnack1 + "</td>\n<td>" + fridayLunch + "</td>\n<td>" + fridaySnack2 + "</td>\n<td>" + fridayDinner + "</td>\n</tr>\n\n");
        myText += ("<td>Saturday:</td>\n<td>" + saturdayBreakfast + "</td>\n<td>" + saturdaySnack1 + "</td>\n<td>" + saturdayLunch + "</td>\n<td>" + saturdaySnack2 + "</td>\n<td>" + saturdayDinner + "</td>\n</tr>\n");
        myText += ("<td>Sunday:</td>\n<td>" + sundayBreakfast + "</td>\n<td>" + sundaySnack1 + "</td>\n<td>" + sundayLunch + "</td>\n<td>" + sundaySnack2 + "</td>\n<td>" + sundayDinner + "</td>\n</tr>\n</table>");
        myText += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=800,height=600,left=400,top=400');
        flyWindow.document.write(myText);
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
