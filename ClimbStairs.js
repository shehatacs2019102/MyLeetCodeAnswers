function Climb(n){
    if (n <=3){
        console.log(n);
        let ways = [0, 1, 2, 3]

    }else{

    }
    for(let i = 4 ; i <=n; i++){
        ways.push(ways[i-1]+ ways[i-2]);
    }
}