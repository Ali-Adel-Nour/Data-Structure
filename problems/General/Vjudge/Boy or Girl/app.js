function chatWithHer(){
    const name = readline();
    const uniqueChars = new Set(name);
    if(uniqueChars.size % 2 === 0){
        print("CHAT WITH HER!");
    } else {
        print("IGNORE HIM!");
    }
}