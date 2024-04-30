export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/16nPqaUKLoLY226kCT-nDv8JYUdwxUqMy/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/1IE-UEtfXjFA5199I3ZRZZZcK5zo1EohH/view?usp=sharing', '_blank');
            break;
        }
    }
}