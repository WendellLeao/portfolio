export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/12elpJn1RErOFg_y_RC_284JjjkILin8z/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/14QbsZk6fhu3mRxeWheei1p67pRl7rKH7/view?usp=sharing', '_blank');
            break;
        }
    }
}