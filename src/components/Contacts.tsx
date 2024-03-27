export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/17iNB6TWhaF29Y_UWqBEQNQ6-2XbQpr-x/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/1XgBwmCBEXai5-b5pKiaNuvoHm289u7sx/view?usp=sharing', '_blank');
            break;
        }
    }
}