// $('#genderSelect').change(e => {
//     $('#genderDescription').empty();
//     $('#genderDescription').text(`Your gender is ${e.target.value}`);

// })

document.getElementById('genderSelect').addEventListener('change', e => {
    const genderDescription = document.getElementById('genderDescription');

    genderDescription.innerText = `Your gender is ${e.target.value}`;
})


// $('#dob').change(e => {
//     $('#genderDescription').empty();

//     const personAge = moment().diff(e.target.value, 'years');
//     $('#personAge').text(`Your age is ${personAge}`);
// })

document.getElementById('dob').addEventListener('change', e => {
    const ageInfo = document.getElementById('ageInfo');

    const personAge = moment().diff(e.target.value, 'years');

    let message = `Ваш вік ${personAge}. `;

    if (personAge > 21) {
        message += 'Ви можете бути волонтером і донатором';
    } else if (personAge > 18) {
        message += 'Ви можете бути волонтером';
    } else {
        message += 'Ви можете брати участь тільки у наших заходах'
    }
    ageInfo.innerHTML = message;
});

document.getElementById('fileInput').addEventListener('change', e => {
    const imageDisplayer = document.getElementById('imageDisplayer');

    var reader = new FileReader();
    reader.onloadend = function() {
        imageDisplayer.setAttribute('src', reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
});


const form = document.getElementById('exampleInputPassword1');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);



