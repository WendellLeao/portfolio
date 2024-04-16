export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1hYCGS5a26FhrNS_uOqhXJQaIMumGwW2r/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/1qID1IuewjTtBSsdLJL-a8z_bO1ejokLt/view?usp=sharing', '_blank');
            break;
        }
    }
}