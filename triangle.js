/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

//prints a triangle of only hashes
function triangle(){
    let hash = '#'
    for (let count = 0; count < 7; count++) {
        console.log(hash)
        hash = hash + '#'
    }
    console.log(hash)
}

//prints a triangle of whatever character is passed in as an argument
function triangle1(str){
    do {
        console.log(str)
        str = str + str[0]
    } while (str.length <= 7)
}
