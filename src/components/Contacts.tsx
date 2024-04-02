export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1P5xNql4EQQHH1eNol-FMPnD1GjUoI6Tg/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/19d_97OCD8k5kk0JiDYNjzeZBuRIGG_Oq/view?usp=sharing', '_blank');
            break;
        }
    }
}