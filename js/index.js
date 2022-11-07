
// -----VARIABLE
var navbar = 0;
var isOpen =!0;
var list = [];
var searchTrue = !0;
var food = document.getElementById("data-place");

var userName = document.getElementById("name")
var userEmail = document.getElementById("email")
var userPhone = document.getElementById("phone")
var userAge = document.getElementById("age")
var userPassword = document.getElementById("password")
var userRePassword = document.getElementById("rePassword")
var userNameAlert = document.getElementById("namealert")
var userEmailAlert = document.getElementById("emailalert")
var userPhoneAlert = document.getElementById("phonealert")
var userAgeAlert = document.getElementById("agealert")
var userpasswordAlert = document.getElementById("passwordalert")
var userRepasswordAlert = document.getElementById("repasswordalert")

var namepressed = 0;
var emailpressed = 0;
var phonepressed = 0;
var agepressed = 0;
var passwordpressed = 0;
var repasswordpressed = 0;



// ----JQUERY--------
$(document).ready(function () {
    $(".sk-cube-grid ").fadeOut(1000, function () {
        $(".first-screen").remove()
        $("body").css("overflow", "auto")
    })
})

search("").then( function() {
    $(document).ready(function () {
        $(".sk-cube-grid ").fadeOut(1000, function () {
            $(".first-screen").remove()
            $("body").css("overflow ", "auto")
        })
    })
})
$(".nav-item a").click(async function (e) {
    let listByMe = e.target.getAttribute("dataInfo")

    document.getElementById("search-content").innerHTML = ""
    food.innerHTML = ""
    $("html, body").animate({
        scrollTop: 0
    }, 200)

    if (listByMe == "contact") {

        food.innerHTML = `
        <section id="contact" class="container search-input w-75 mx-auto mb-5 ">
		<div class="p-2">
			<h2 class="text-light mb-5">ContacUs...</h2>
			<div class="food">
				<div class="col-md-6">
					<div class="form-group">
						<input class="form-control shadow " onkeyup="validation()" id="name"
							placeholder="Enter Your Name">
						<div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
							Special Characters and Numbers not allowed
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control" id="email" placeholder="Enter Email">
						<div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
							Enter valid email. *Ex: xxx@yyy.zzz
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control" id="phone" placeholder="Enter phone">
						<div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
							Enter valid Phone Number
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control" id="age" placeholder="Enter Age">
						<div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
							Enter valid Age
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control" type="password" id="password"
							placeholder="Enter Password">
						<div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
							Enter valid password *Minimum eight characters, at least one letter and one number:*
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control" type="password" id="rePassword"
							placeholder="Enter RePassword">
						<div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
							Enter valid Repassword
						</div>
					</div>
				</div>


			</div>

			<button type="submit" disabled id="submitBtn" class="btn btn-outline-danger">Submit</button>
		</div>

	</section>`

        userName = document.getElementById("name")
        userEmail = document.getElementById("email")
        userPhone = document.getElementById("phone")
        userAge = document.getElementById("age");
        userPassword = document.getElementById("password");
        userRePassword = document.getElementById("rePassword");
        userNameAlert = document.getElementById("namealert");
        userEmailAlert = document.getElementById("emailalert");
        userPhoneAlert = document.getElementById("phonealert");
        userAgeAlert = document.getElementById("agealert");
        userpasswordAlert = document.getElementById("passwordalert");

        userRepasswordAlert = document.getElementById("repasswordalert");

        userName.addEventListener("focus", function () {
            namepressed = true
        })
        userEmail.addEventListener("focus", function () {
            emailpressed = true
        })
        userPhone.addEventListener("focus", function () {
            phonepressed = true
        })
        userAge.addEventListener("focus", function () {
            agepressed = true
        })
        userPassword.addEventListener("focus", function () {
            passwordpressed = true
        })
        userRePassword.addEventListener("focus", function () {
            repasswordpressed = true
        })
    }
    if (listByMe == "search") {
        food.innerHTML = ""
        document.getElementById("search-content").innerHTML = `
        <div class="food">
				<div class="col-md-6"><input id="searchInput" class="form-control mb-2 " placeholder="Search By Name">
				</div>
				<div class="col-md-6">
					<input class="form-control " type="text" maxlength="1" id="letter"
						placeholder="search By First Letter...">
				</div>

			</div>`

        $("#searchInput").keyup(function (e) {
            search(e.target.value)
        })
        $("#letter").keyup(function (e) {
            getByLetter(e.target.value)
        })

        $('#letter').on("input", function () {
            if (this.value.length > 1)
                this.value = this.value.slice(0, 1);
        });
    }


    let click_event = new CustomEvent('click');
    document.querySelector('.push-button').dispatchEvent(click_event);

    let cate;

    if (listByMe == "categories") {
        $(".loading").fadeIn(100)

        cate = await getCategories(listByMe + ".php")
        list = cate.categories.splice(0, 20);
        displayCategories()
        $(".loading").fadeOut(500)
    } else if (listByMe == "a") {
        $(".loading").fadeIn(100)

        x = await getCategories("list.php?a=list")
        list = x.meals.splice(0, 20);
        displayArea()
        $(".loading").fadeOut(500)
    } else if (listByMe == "i") {
        $(".loading").fadeIn(100)

        cate = await getCategories("list.php?i=list")
        list = cate.meals.splice(0, 20);
        displayIngredients()
        $(".loading").fadeOut(500)
    }





})
$(document).scroll(function () {

    if ($(document).scrollTop()) {
        $(".inputs").css("backgroundColor", "#1f1717f2")
    }
})

$(".outer-side-nav").click(function () {
    isOpen ? ($(".inner-nav").addClass("open").removeClass("close"),
        navbar = $(".inner-nav").width() - 10,
        $(".outer-side-nav").css("left", navbar),
        $(".d-none").toggleClass(".d-flex"),
        $(".inner-nav .item1").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1000), $(".inner-nav .item2").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1200), $(".inner-nav .item3").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1400), $(".inner-nav .item4").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1600), $(".inner-nav .item5").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1800), $(".inner-nav .item6").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 2000),
        isOpen = !isOpen) : ($(".inner-nav").addClass("close").removeClass("open"),
            $(".d-flex").toggleClass(".d-none"),
            $(".outer-side-nav").css("left", 0),
            $(".inner-nav li").animate({
                opacity: "0",
                paddingTop: "500px"
            }, 500), isOpen = !isOpen)
});

$(".nav-search").click(function () {
    searchTrue ? ($(".search").addClass("open").removeClass("close"),
        $(".fa-search").toggleClass("fa-times"),
        $(".search-info").animate({
            top: "49%"
        }, 1500, function () {
            $(".search-info").animate({
                top: "50%"
            }, 250)
        }), searchTrue = !searchTrue) : ($(".search").addClass("close-search").removeClass("open"),
            $(".fa-search").toggleClass("fa-times"),
            $(".search-input").animate({
                top: "300%"
            }), searchTrue = !searchTrue)
});



// -----DISPLAY  ALL---------
function displayCategories() {
    let cartona = ""
    for (var i = 0; i < list.length; i++)
        cartona += `
    <div class="col-md-4 col-lg-5  search-input shadow ">
        <div class="boxes shadow rounded position-relative bg-gradient">
            <div onclick="filterByCategory('${list[i].strCategory}')" class="post">
                <img src='${list[i].strCategoryThumb}' class="w-100 rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-2">
                        <h2>${list[i].strCategory}</h2>
                        <p>${list[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    food.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}
function displayArea() {
    let cartona = ""
    for (var i = 0; i < list.length; i++)
        cartona += `
    <div class="col-md-4 col-lg-5  search-input  shadow text-center">
        <div class="boxes shadow rounded position-relative bg-gradient">
            <div onclick=(filterByArea('${list[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${list[i].strArea}</h2>
            </div>
        </div>
    </div>`
    food.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)


}
function displayIngredients() {
    let cartona = ""
    for (var i = 0; i < list.length; i++)
        cartona += `
    <div class="col-md-4 col-lg-5  search-input  shadow text-center">
        <div onclick="getMainIngredient('${list[i].strIngredient}')" class="boxes shadow rounded position-relative bg-gradient">
            <div class="post ">
                <i class="fa-solid fa-bowl-food fa-3x"></i>
                <h2 class="text-white">${list[i].strIngredient}</h2>
                <p class="text-white">${list[i].strDescription.split(" ").splice(0, 20).join(" ")}</p>
            </div>
        </div>
    </div>`
    food.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}
function displayMeals(list) {

    let meals = ""
    for (let i = 0; i < list.length; i++) {
        meals += `
        <div class="col-md-4 col-lg-5  search-input shadow">
            <div onclick="getMeal('${list[i].idMeal}')" class="boxes shadow rounded position-relative bg-gradient">
                <div class="post ">
                    <img src='${list[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer d-flex align-items-center ">
                        <div class="info p-2">
                            <h2>${list[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    food.innerHTML = meals
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}
function displayMeal(myMeal) {
    let cartona = ""
    for (let i = 1; i <= 20; i++) {
        if (myMeal[`strIngredient${i}`]) {
            cartona += `<li class="my-3 mx-1 p-1 alert-success rounded">${myMeal[`strMeasure${i}`]} ${myMeal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = myMeal.strTags?.split(",")
    let tagsStr = ""
    for (let i = 0; i < tags?.length; i++) {
        tagsStr += `<li class="my-3 mx-1 p-1 alert-danger rounded">${tags[i]}</li>`
    }

    let strCartona = `
    <div class="col-md-4 myM text-white">
					<img class="w-100" src="${myMeal.strMealThumb}" alt=""
						srcset=""><br>
					<h1>${myMeal.strMeal}</h1>
				</div>
				<div class="col-md-8 myM text-white text-left">
					<h2>Instructions</h2>
					<p>${myMeal.strInstructions}</p>
					<p><b class="fw-bolder">Area :</b> ${myMeal.strArea}</p>
					<p><b class="fw-bolder">Category :</b> ${myMeal.strCategory}</p>
					<h3>Recipes :</h3>
					<ul class="d-flex " id="recipes">
					</ul>

					<h3 class="my-2 mx-1 p-1">Tags :</h3>
					<ul class="d-flex " id="tags">
					</ul>

					
					<a class="btn btn-success text-white" target="_blank" href="${myMeal.strSource}">Source</a>
					<a class="btn youtube text-white" target="_blank" href="${myMeal.strYoutube}">Youtub</a>
				</div>`
    food.innerHTML = strCartona
    document.getElementById("recipes").innerHTML = cartona
    document.getElementById("tags").innerHTML = tagsStr
    $("html, body").animate({
        scrollTop: 0
    }, 200)

}


// ---FIND  BY -------

async function getMainIngredient(nameOfMeal) {
    $(".loading").fadeIn(100)
    let myMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameOfMeal}`)
    myMeal = await myMeal.json()
    displayMeals(myMeal.meals)
    $(".loading").fadeOut(500)
}
async function getMeal(mealID) {
    $(".loading").fadeIn(100)
    let myMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    myMeal = await myMeal.json()
    displayMeal(myMeal.meals[0])
    $(".loading").fadeOut(500)
}
async function getCategories(listByMe) {
    cate = await fetch(`https://www.themealdb.com/api/json/v1/1/${listByMe}`);
    cate = await cate.json()
    return cate;

}
async function getByLetter(letters) {
    if (letters) {
        $(".loading").fadeIn(100)
        let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letters}`)
        meals = await meals.json()
        if (meals.meals) {
            displayMeals(meals.meals)
        }
        $(".loading").fadeOut(100)
    }
}
async function filterByArea(area) {
    $(".loading").fadeIn(100)
    let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    meals = await meals.json()
    displayMeals(meals.meals.slice(0, 20))
    $(".loading").fadeOut(500)
}
async function filterByCategory(category) {
    $(".loading").fadeIn(100)
    let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    meals = await meals.json()
    displayMeals(meals.meals)
    $(".loading").fadeOut(500)
}



// ----SEARCH  AND  VALIDATE----
async function search(L) {
    $(".loading").fadeIn(100)
    let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${L}`)
    meals = await meals.json()
    displayMeals(meals.meals)
    $(".loading").fadeOut(400)
    return meals
}

function validation() {

    if (namepressed) {
        if (userNameV()) {
            userName.classList.remove("is-invalid")
            userName.classList.add("is-valid")
            userNameAlert.classList.replace("d-block", "d-none")
            userNameAlert.classList.replace("d-block", "d-none")

        } else {
            userName.classList.replace("is-valid", "is-invalid")
            userNameAlert.classList.replace("d-none", "d-block")
        }
    }

    if (emailpressed) {
        if (userEmailV()) {
            userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            userEmailAlert.classList.replace("d-block", "d-none")
            userEmailAlert.classList.replace("d-block", "d-none")
        } else {
            userEmail.classList.replace("is-valid", "is-invalid")
            userEmailAlert.classList.replace("d-none", "d-block")
        }
    }

    if (phonepressed) {
        if (userPhoneV()) {
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            userPhoneAlert.classList.replace("d-block", "d-none")
            userPhoneAlert.classList.replace("d-block", "d-none")
        } else {
            userPhone.classList.replace("is-valid", "is-invalid")
            userPhoneAlert.classList.replace("d-none", "d-block")
        }
    }

    if (agepressed) {
        if (userAgeV()) {
            userAge.classList.remove("is-invalid")
            userAge.classList.add("is-valid")
            userAgeAlert.classList.replace("d-block", "d-none")
            userAgeAlert.classList.replace("d-block", "d-none")
        } else {
            userAge.classList.replace("is-valid", "is-invalid")
            userAgeAlert.classList.replace("d-none", "d-block")
        }
    }

    if (passwordpressed) {
        if (userPasswordV()) {
            userPassword.classList.remove("is-invalid")
            userPassword.classList.add("is-valid")
            userpasswordAlert.classList.replace("d-block", "d-none")
            userpasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userPassword.classList.replace("is-valid", "is-invalid")
            userpasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if (repasswordpressed) {
        if (userRePasswordV()) {
            userRePassword.classList.remove("is-invalid")
            userRePassword.classList.add("is-valid")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            userRepasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userRePassword.classList.replace("is-valid", "is-invalid")
            userRepasswordAlert.classList.replace("d-none", "d-block")
        }
    }
    if (userNameV() && userEmailV()) {
        document.getElementById("submitBtn").removeAttribute("disabled")
    }
    else {
        document.getElementById("submitBtn").setAttribute("disabled", "true")
    }

    if (userPhoneV() && userAgeV()) {
        document.getElementById("submitBtn").removeAttribute("disabled")
    }
    else {
        document.getElementById("submitBtn").setAttribute("disabled", "true")
    }

    if (userPasswordV() && userRePasswordV()) {
        document.getElementById("submitBtn").removeAttribute("disabled")
    }
    else {
        document.getElementById("submitBtn").setAttribute("disabled", "true")
    }

}

// function validateMethod()
// {
//     return /^[a-zA-Z ]+$/.test(userName.value)
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
//     return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
//     return /^[1-9][0-9]?$|^100$/.test(userAge.value)
//     return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
//     return userPassword.value == userRePassword.value
// }
function userNameV() {
    return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailV() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneV() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeV() {
    return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordV() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordV() {
    return userPassword.value == userRePassword.value
}
