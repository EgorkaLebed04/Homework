function getReputation(likes, dislikes, editMessages, allMessages) {
    let res;
    if (likes > dislikes) {
        if (allMessages > 0) {
            res = (likes - dislikes) * ((allMessages - editMessages) / allMessages)
        } else res = 0;
    } else {
        res = likes - dislikes;
    }
    return res;
}

console.log(getReputation(10, 5, 10, 10));

// В задании указано "Коэффициент — доля не отредактированных сообщений пользователя.", так получается,
// если все сообщения отредактированы, коэффицент = 0. 

// если нужно наоборот, тогда формула будет выглядеть:
//     res = (likes - dislikes) * (editMessages / allMessages)