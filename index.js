

function create(){



    let date = new Date().toLocaleTimeString();
    document.querySelector('.pkTime').innerHTML = date

    setTimeout(create, 1000);
}

function dateTime(){
    let dates = new Date().toLocaleDateString();
    console.log(dates);
    
    document.querySelector('.datee').innerHTML=dates;
    
    setTimeout(dateTime, 1000);
}

    

