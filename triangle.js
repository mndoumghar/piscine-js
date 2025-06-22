function triangle(x,y) {
    
    
    for (let i = x; i >=0; i--) {

        for (let j = y-i; j >0; j--) {
            process.stdout.write('*')
    
        }
        console.log('')
        
    }
}
triangle(5,5)