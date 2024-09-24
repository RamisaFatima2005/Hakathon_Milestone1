function toggleSkillsSection(): void {
    const toggleButton = document.querySelector('button') as HTMLButtonElement;
    const skillsSection = document.querySelector('.heading3 + p') as HTMLElement;

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            skillsSection.classList.toggle('hidden');
        });
    }
}

toggleSkillsSection();