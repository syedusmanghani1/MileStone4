// script.ts
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    }
    else {
        skillsSection.classList.add('hidden');
    }
});
var form = document.getElementById('resume-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById("your-education").value;
    var skills = document.getElementById("your-skills").value;
    var experience = document.getElementById("your-experience").value;
    document.querySelector('#personal-info h1').textContent = name;
    document.querySelector('#personal-info p').textContent = "Contact: ".concat(email);
    document.querySelector('#education ul').textContent = education;
    document.querySelector('#skills ul').textContent = skills;
    document.querySelector('#work-experience p').textContent = experience;
});
