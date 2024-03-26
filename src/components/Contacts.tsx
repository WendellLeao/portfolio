export function OpenResumeFile(language: string){
    switch (language){
        case "en":{
            window.open('https://drive.google.com/file/d/17iNB6TWhaF29Y_UWqBEQNQ6-2XbQpr-x/view?usp=sharing', '_blank');
            break;
        }
        case "pt":{
            window.open('https://drive.google.com/file/d/1XgBwmCBEXai5-b5pKiaNuvoHm289u7sx/view?usp=sharing', '_blank');
            break;
        }
    }
}