var arr = [
    {
        team: 'CSK',
        primary:'yellow',
        secondary: 'blue'
    },
    {
        team: 'RCB',
        primary:'red',
        secondary: 'black'
    },
    {
        team: 'MI',
        primary:'blue',
        secondary: 'gold'
    },
    {
        team: 'KKR',
        primary:'purple',
        secondary: 'gold'
    },
    {
        team: 'SH',
        primary:'Orange',
        secondary: 'black'
    },
    {
        team: 'DC',
        primary:'blue',
        secondary: 'red'
    },
    {
        team: 'PK',
        primary:'red',
        secondary: 'silver'
    },
    {
        team: 'GT',
        primary:'Navy blue',
        secondary: 'gold'
    },
    {
        team: 'LSG',
        primary:'light blue',
        secondary: 'Orange'
    },
    {
        team: 'RR',
        primary:'Pink',
        secondary: 'blue'
    }
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var body = document.querySelector('body')

btn.addEventListener('click',function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]
    
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    body.style.backgroundColor = winner.primary
})