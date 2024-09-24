function toggleSkillsSection() {
    var toggleButton = document.querySelector('button');
    var skillsSection = document.querySelector('.heading3 + p');
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            skillsSection.classList.toggle('hidden');
        });
    }
}
toggleSkillsSection();
