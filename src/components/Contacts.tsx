export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1HKmdBj3KWe1gWluI0PTof9D6s9l6IlSZ/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/11z-rKy_x1TN5ZCSwizHkpHUm9pdS3lPB/view?usp=sharing', '_blank');
            break;
        }
    }
}