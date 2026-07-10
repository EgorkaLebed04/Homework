function getReputation(likes, dislikes, editMessages, allMessages) {
    if (likes > dislikes) {
        if (allMessages > 0) {
            let res = (likes - dislikes) * ((allMessages - editMessages) / allMessages)
        } else res = 0;
    } else {
        res = likes - dislikes
    }
    return res
}

console.log(getReputation(10, 5, 5, 10));