export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1hNNT5HFG3IbePLcXT1_vwyNKdExEPzEh/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/1CJSAw4AZQx3hPe9NGRB0XGJZkXJ-ZTdn/view?usp=sharing', '_blank');
            break;
        }
    }
}