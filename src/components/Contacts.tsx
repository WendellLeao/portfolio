export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1G5MVEPQi41txJaxPsu_MOZtRS-6EPvPN/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/19rUnhRmTqXLGnPIuPNlj5fvICZJXSxqw/view?usp=sharing', '_blank');
            break;
        }
    }
}