var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  const radioGroups = form.querySelector(
    'input[type="radio"][name="gender"]:checked'
  );

  // Track the first empty field or radio group
  let firstEmptyField = null;

  // Check for empty input fields
  inputs.forEach((inp) => {
      if (inp.value.trim() === "") {
          if (!firstEmptyField) {
              firstEmptyField = inp;
            }
        }
    });
    
    // Check for empty radio fields
  if (!firstEmptyField && radioGroups === null) {
    firstEmptyField = document.querySelector(
      `input[type="radio"][name="gender"]:not(:checked)`
    );
  }

  // Set focus to the first empty field or radio group (if found)
  if (firstEmptyField) {
    alert("Fill all the input field and select gender");
    firstEmptyField.focus();
  } else {
    alert("Form submitted");
  }
});
