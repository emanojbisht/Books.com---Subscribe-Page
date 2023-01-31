"use strict";
//HEADING variables
const form = document.querySelector("#form-container");
let firstName;
let lastName;
let gender = document.querySelectorAll(".genderItem");
let genderRadio = false;
let maleGender = false;
let femaleGender = false;
let email;
let phoneNumber;
let password;
let cpassword;
let hobbies = false;
let hobby = document.querySelectorAll(".hobbies");
let movieHobby;
let travelHobby = false;
let gameHobby = false;
let musicHobby = false;
let booksHobby = false;
let juiceHobby = false;
let iAcceptCheck = false;
let submitForm = true;

//HEADING error message to display
const REQUIRED_FNAME = "🚫 Please enter your First Name ?";
const REQUIRED_LNAME = "🚫 Please enter your Last Name ?";
const REQUIRED_GENDER = "🚫 Please select a gender ?";
const REQUIRED_EMAIL = "🚫 Please enter your Email ? ";
const REQUIRED_PHONE = "🚫 Please enter your Phone number ? ";
const REQUIRED_PASSWORD = "🚫 Please enter your Password ? ";
const REQUIRED_CPASSWORD = "🚫 Please enter your Password ? ";
const REQUIRED_HOBBIES = "🚫 Please select hobby ?";
const REQUIRED_CHECK = "🚫 Please ✔ the box ? ";

//HEADING focus element when clicked
function focusElement(focusElement, color) {
  focusElement.style.border = "2px solid " + color;
}

//HEADING border color red if empty or invalid value
function BorderColorRed(element, color) {
  focusElement(element, color);
}

//HEADING module to display message in span element
function displayMessage(inputValue, errorMessage, flag, color) {
  const targetElement = inputValue.nextElementSibling;
  targetElement.textContent = errorMessage;
  targetElement.style.color = color;
  targetElement.style.fontSize = "15px";
  return flag;
}

//HEADING module that user has entered the correct value
function success(inputValue) {
  return displayMessage(inputValue, "", true, "green");
}

//HEADING module to display error message to user that the value entered is not correct
function failur(inputValue, errorMessage) {
  BorderColorRed(inputValue, "red");
  return displayMessage(inputValue, errorMessage, false, "red");
}

//HEADING module to check if enter data is not empty
function isEmpty(inputValue, errorMessage) {
  //SUB checking if value is empty
  if (inputValue.value.trim() === "") {
    return failur(inputValue, errorMessage);
  }
  //SUB if value is not empty
  return success(inputValue);
}

//HEADING function to send error message is empty initially
function initialError() {
  firstName = isEmpty(form.elements[0], REQUIRED_FNAME);
  if (!firstName) {
    BorderColorRed(form.elements[0], "red");
  }
  lastName = isEmpty(form.elements[1], REQUIRED_LNAME);
  if (!lastName) {
    BorderColorRed(form.elements[1], "red");
  }
  email = isEmpty(form.elements[4], REQUIRED_EMAIL);
  if (!email) {
    BorderColorRed(form.elements[4], "red");
  }
  phoneNumber = isEmpty(form.elements[5], REQUIRED_PHONE);
  if (!phoneNumber) {
    BorderColorRed(form.elements[5], "red");
  }
  password = isEmpty(form.elements[6], REQUIRED_PASSWORD);
  if (!password) {
    BorderColorRed(form.elements[6], "red");
  }
  cpassword = isEmpty(form.elements[7], REQUIRED_CPASSWORD);
  if (!cpassword) {
    BorderColorRed(form.elements[7], "red");
  }

  // OUTER to display error if male gender and female gender are not selected
  if (!maleGender && !femaleGender) {
    //INNER to check if gender is not selected
    displayMessage(
      document.querySelector(".gender"),
      REQUIRED_GENDER,
      false,
      "red"
    );
  }
  //OUTER to display error if hobbies are not selected
  if (!hobbies) {
    displayMessage(
      document.querySelector(".hobbies-item"),
      REQUIRED_HOBBIES,
      false,
      "red"
    );
  }
  //OUTER to display error if check box is not selected
  if (!iAcceptCheck) {
    displayMessage(
      document.querySelector(".a-termConditon"),
      REQUIRED_CHECK,
      false,
      "red"
    );
  }
}

// HEADING check if first name | last name is valid or not
function nameCheck(element) {
  let flagVar;
  const NameValue = element.value;
  const reg = /^[a-zA-Z ]+$/;
  if (!reg.test(NameValue)) {
    flagVar = displayMessage(
      element,
      "🚫 Please enter a valid name!!",
      false,
      "red"
    );
    BorderColorRed(element, "red");
    submitForm = false;
    return flagVar;
  }
  BorderColorRed(element, "green");
  return true;
}

//HEADING check if email is valid
function emailcheck(element) {
  let flagVar;
  const emailValue = element.value;
  const reg = /^\w+@(books|pages|world).[a-zA-Z]{2,3}$/gim;
  if (!reg.test(emailValue)) {
    flagVar = displayMessage(
      element,
      "🚫 Please enter a valid email with domain : books | pages | world !!",
      false,
      "red"
    );
    BorderColorRed(element, "red");
    submitForm = false;
    return flagVar;
  }
  BorderColorRed(element, "green");
  return true;
}

//HEADING check if phone is valid
function phonecheck(element) {
  let flagVar;
  let phoneValue = element.value;
  const reg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  if (!reg.test(phoneValue)) {
    flagVar = displayMessage(
      element,
      "🚫 Phone number must be Number and of 10 characters!!",
      false,
      "red"
    );
    BorderColorRed(element, "red");
    submitForm = false;
    return flagVar;
  }
  BorderColorRed(element, "green");
  return true;
}

//HEADING check if password is valid
function paswordCheck(element) {
  let flagVar;
  const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/;
  const passwordValue = element.value;
  if (!reg.test(passwordValue)) {
    flagVar = displayMessage(
      element,
      "🚫 Password should contain atleast 1 uppercase, 1 lowercase, 1 digit, and 1 special symbol and must be atleast 6 digit long!",
      false,
      "red"
    );
    BorderColorRed(element, "red");
    submitForm = false;
    return flagVar;
  }
  BorderColorRed(element, "green");
  return true;
}

//HEADING check if password === confirmpassword
function cpasswordCheck(elementPassword, elementCpassword) {
  let flagVar;
  if (elementCpassword.value === elementPassword.value) {
    submitForm = true;
    flagVar = true;
    BorderColorRed(elementCpassword, "green");
  } else {
    flagVar = displayMessage(
      elementCpassword,
      "🚫 Password does not match",
      false,
      "red"
    );
    BorderColorRed(elementCpassword, "red");
    submitForm = false;
    return flagVar;
  }
  BorderColorRed(elementCpassword, "green");
  return flagVar;
}

//HEADING focusout
for (let i = 0; i < form.elements.length; i++) {
  form.elements[i].addEventListener("focusout", () => {
    if (form.elements[i].id === "firstName") {
      //OUTER validation for first name
      firstName = isEmpty(form.elements[i], REQUIRED_FNAME);
      if (firstName) {
        firstName = nameCheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "lastName") {
      //OUTER validation for last name;
      lastName = isEmpty(form.elements[i], REQUIRED_LNAME);
      if (lastName) {
        lastName = nameCheck(form.elements[i]);
      }
    } else if (
      form.elements[i].id === "male" ||
      form.elements[i].id === "female"
    ) {
      //OUTER validation of gender
      genderRadio = true;
    } else if (form.elements[i].id === "email") {
      //OUTER validation for email
      email = isEmpty(form.elements[i], REQUIRED_EMAIL);
      if (email) {
        email = emailcheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "phoneNumber") {
      //OUTER validation for phonenumber
      phoneNumber = isEmpty(form.elements[i], REQUIRED_PHONE);
      if (phoneNumber) {
        phoneNumber = phonecheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "password") {
      //OUTER validation for password
      password = isEmpty(form.elements[i], REQUIRED_PASSWORD);
      if (password) {
        password = paswordCheck(form.elements[i]);
        if (password) {
          form.elements[7].disabled = false;
        }
      }
    } else if (form.elements[i].id === "cpassword") {
      //OUTER validation for confirm password
      if (!password) {
        form.elements[7].disabled = true;
        BorderColorRed(form.elements[i], "red");
      }
      cpassword = isEmpty(form.elements[7], REQUIRED_CPASSWORD);
      if (cpassword) {
        //INNER if disable confirm password till password is not validated
        cpassword = cpasswordCheck(form.elements[6], form.elements[i]);
      }
    } else if (
      form.elements[i].id === "movies" ||
      form.elements[i].id === "travel" ||
      form.elements[i].id === "game" ||
      form.elements[i].id === "music" ||
      form.elements[i].id === "books" ||
      form.elements[i].id === "juice"
    ) {
      //OUTER validation for hobbies
      if (form.elements[i].checked && form.elements[i].id === "movies") {
        movieHobby = true;
      } else if (form.elements[i].checked && form.elements[i].id === "travel") {
        travelHobby = true;
      } else if (form.elements[i].checked && form.elements[i].id === "game") {
        gameHobby = true;
      } else if (form.elements[i].checked && form.elements[i].id === "music") {
        musicHobby = true;
      } else if (form.elements[i].checked && form.elements[i].id === "books") {
        booksHobby = true;
      } else if (form.elements[i].checked && form.elements[i].id === "juice") {
        juiceHobby = true;
      }
    }
  });
}

//HEADING when subscribe button is clicked
form.elements[15].addEventListener("click", () => {
  event.preventDefault();

  //OUTER validation to check if all fields are empty when submit is clicked
  initialError();

  //OUTER to validate all the fields according to set validation
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].id === "firstName") {
      if (firstName) {
        firstName = nameCheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "lastName") {
      if (lastName) {
        lastName = nameCheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "email") {
      if (email) {
        email = emailcheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "phoneNumber") {
      if (phoneNumber) {
        phoneNumber = phonecheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "password") {
      if (password) {
        password = paswordCheck(form.elements[i]);
      }
    } else if (form.elements[i].id === "cpassword") {
      if (cpassword) {
        cpassword = cpasswordCheck(form.elements[6], form.elements[i]);
      }
    }
  }

  //OUTER to submit form
  if (submitForm) {
    //INNER   if submit form is true
    if (
      firstName &&
      lastName &&
      genderRadio &&
      email &&
      phoneNumber &&
      password &&
      cpassword &&
      hobbies &&
      iAcceptCheck
    ) {
      //SUB if all the filed are true submit the form
      console.log("form success submitted");
      const divToUnhide = document.querySelector("#form-right-Div");
      divToUnhide.classList.remove("hidden");
      const section = document.querySelector("#section");
      section.style.display = "grid";
      // const main = document.querySelector("#main");
      // main.style.width = "60%";
      let array = [];
      const table = document.querySelector(".user-details-table").children[0]
        .children;
      const name = form.elements[0].value + " " + form.elements[1].value;
      let gender;
      if (maleGender) {
        gender = "Male";
      } else {
        gender = "female";
      }
      const email = form.elements[4].value;
      const phone = form.elements[5].value;
      let hobbiesItem = [];
      if (movieHobby) {
        hobbiesItem.push("Movie");
      }
      if (travelHobby) {
        hobbiesItem.push("Travel");
      }
      if (gameHobby) {
        hobbiesItem.push("Game");
      }
      if (musicHobby) {
        hobbiesItem.push("Music");
      }
      if (booksHobby) {
        hobbiesItem.push("Books");
      }
      if (juiceHobby) {
        hobbiesItem.push("Juice");
      }
      array.push(name);
      array.push(gender);
      array.push(email);
      array.push(phone);
      array.push(hobbiesItem);
      for (let i = 0; i < table.length; i++) {
        const item = table[i].children[1];
        item.textContent = array[i];
      }

      //SUB clearing the form
      for (let i = 0; i < form.length - 1; i++) {
        form.elements[i].value = "";
        BorderColorRed(form.elements[i], "");
        if (
          form.elements[i].id === "male" ||
          form.elements[i].id === "female"
        ) {
          form.elements[i].checked = false;
        }

        if (
          form.elements[i].id === "movies" ||
          form.elements[i].id === "travel" ||
          form.elements[i].id === "game" ||
          form.elements[i].id === "music" ||
          form.elements[i].id === "books" ||
          form.elements[i].id === "juice"
        ) {
          form.elements[i].checked = false;
        }

        if (form.elements[i].id === "checkTerms") {
          form.elements[i].checked = false;
        }
      }
      travelHobby = false;
      gameHobby = false;
      musicHobby = false;
      booksHobby = false;
      juiceHobby = false;
      iAcceptCheck = false;
      submitForm = true;
      hobbies = false;
      genderRadio = false;
      maleGender = false;
      femaleGender = false;
    } else {
      //SUB all the field are false form cannot submit
      console.log("form cannot submit");
    }
  } else {
    //INNER submitform = false
    console.log("form cannot submit");
  }
});

//HEADING i accept check box event listener
form.elements[14].addEventListener("change", () => {
  const displayError =
    document.querySelector(".a-termConditon").nextElementSibling;
  displayError.style.fontSize = "15px";
  if (!form.elements[14].checked) {
    displayError.textContent = "🚫 Please ☑ the check box.";
    displayError.style.color = "red";
    submitForm = false;
  } else {
    iAcceptCheck = true;
    submitForm = true;
    displayError.textContent = "";
  }
});

//HEADING module to check hobbies section
for (let i = 0; i < hobby.length; i++) {
  hobby[i].addEventListener("change", () => {
    if (
      hobby[0].checked ||
      hobby[1].checked ||
      hobby[2].checked ||
      hobby[3].checked ||
      hobby[4].checked ||
      hobby[5].checked
    ) {
      displayMessage(document.querySelector(".hobbies-item"));
      hobbies = true;
      submitForm = true;
    } else {
      displayMessage(
        document.querySelector(".hobbies-item"),
        REQUIRED_HOBBIES,
        false,
        "red"
      );
      hobbies = false;
      submitForm = false;
    }

    if (hobby[i].checked === false && hobby[i].id === "movies") {
      movieHobby = false;
    } else if (hobby[i].checked === false && hobby[i].id === "travel") {
      travelHobby = false;
    } else if (hobby[i].checked === false && hobby[i].id === "game") {
      gameHobby = false;
    } else if (hobby[i].checked === false && hobby[i].id === "music") {
      musicHobby = false;
    } else if (hobby[i].checked === false && hobby[i].id === "books") {
      booksHobby = false;
    } else if (hobby[i].checked === false && hobby[i].id === "juice") {
      juiceHobby = false;
    }
  });
}

//HEADING moduel to check gender selectionn
for (let i = 0; i < gender.length; i++) {
  gender[i].addEventListener("change", () => {
    if (gender[i].checked && gender[i].id === "male") {
      maleGender = true;
      femaleGender = false;
      success(document.querySelector(".gender"));
    } else {
      femaleGender = true;
      maleGender = false;
      success(document.querySelector(".gender"));
    }
  });
}
