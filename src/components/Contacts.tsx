export function OpenResumeFile(language: string){
    switch (language){
        case "en":{
            window.open('https://drive.google.com/file/d/1NwQOa8Al7rUwjpGDfVFN87JaCru5KhLO/view?usp=sharing', '_blank');
            break;
        }
        case "pt":{
            window.open('https://drive.google.com/file/d/1cLff53-ts-Tv5POzzg-OfGhE8zpMzkpU/view?usp=sharing', '_blank');
            break;
        }
    }
}