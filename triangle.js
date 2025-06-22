function triangle(x,y) {
    
    
    for (let i = y; i >=0; i--) {

        for (let j = y-i; j >0; j--) {
            process.stdout.write(x)
    
        }
        console.log('')
        
    }
}
triangle('#',5)