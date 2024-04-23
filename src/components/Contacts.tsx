export function OpenResumeFile(language: string) : void {
    switch (language) {
        case "en-US": {
            window.open('https://drive.google.com/file/d/1glfB3AiVlKzM01WiB7hPcLcuwXPU8Svg/view?usp=sharing', '_blank');
            break;
        }
        case "pt-BR": {
            window.open('https://drive.google.com/file/d/12VKlfIf1WjrQZpcownyhVY1IJ-QOfT_1/view?usp=sharing', '_blank');
            break;
        }
    }
}