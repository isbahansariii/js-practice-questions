var countTriples = function(n) {
        let count = 0;
        let c;

        for (let a=1; a<=n; a++){
            
            for (let b=1; b<=n; b++){
                
                c = Math.sqrt(a*a + b*b)   //as c*c= a*a + b*b

                if(Number.isInteger(c) && c<=n) count++
            }
        }

        return count;
};

console.log(countTriples(5));