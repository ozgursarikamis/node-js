/*
V8, the JavaScript engine used by Node.js, 
tries to optimize the code you run from a performance point
of view. 
It starts comparing the strings character by character,
and once a mismatch is found, it stops the comparison operation. 
So the longer the attacker has right from the password,
the more time it takes.
*/
const c = require("@hapi/cryptiles")
function checkApiKey(apiKeyFromDb, apiKeyReceived) {
    /* INSTEAD OF THIS:
    if (apiKeyFromDb === apiKeyReceived) {
        return true
    }
    return false
    */
    //TODO: USE THIS
    return c.fixedTimeComparison(apiKeyFromDb, apiKeyReceived);
}
const apiKey1 = 'GH2ydzKhbAwlbExeDR5zStj2CtOfn63C';
const apiKey2 = 'cde0f1f5-06d6-4c97-b8ab-cddfd065c5c0';
console.log(checkApiKey(apiKey1, apiKey2));