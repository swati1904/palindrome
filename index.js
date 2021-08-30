const checkPalindrome = () => {
    const str = document.getElementById("myTextarea").value;
    let words = str.split(' ')
    let count = 0;
    words.map((words) => {
        let reverse = words.split("").reverse().join("")
        if (words === reverse && words.length > 1) {
            count++
        }
    })
    if (count > 0) {
        document.getElementById("demo").innerHTML = "Palindrome Exist in a sentense";
    }
    else {
        document.getElementById("demo").innerHTML = "Palindrome  Not Exist in a sentense";
    }
}


