function canConstruct(ransomNote: string, magazine: string): boolean {
    const rnArr = [...ransomNote];

    for(const rn of rnArr){
        if(!magazine.includes(rn)) return false;
        magazine = magazine.replace(rn,"");
    }
    return true
};