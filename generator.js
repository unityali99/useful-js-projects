function * doAuth()
{
    console.log("User logged in")
    yield 'LOGGING IN ...'
    console.log("User purchased ...")
    yield 'PURCHASING ...'
    console.log("User changed password")
    yield 'LOGGING OUT ...'
    console.log("User logged out")
}


const userAuth = doAuth();

userAuth.next()
userAuth.next()
userAuth.next()

console.log(userAuth.return().value)