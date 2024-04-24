export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/16Swunww2HFKR4gt3sC8rrojuCEnCgXB6/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/1_dA2dfHwoqz8Zy_yxX7Znlde9mJMWpOo/view?usp=sharing', '_blank');
            break;
        }
    }
}