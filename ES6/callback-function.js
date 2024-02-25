function greeting(gratinghandeler, name){
    gratinghandeler(name);
}

function greetinHandeler(name){
    console.log('Good morning', name);
}

function eveningHandeler(name){
    console.log('Good evening', name);
}

greeting(greetinHandeler, 'Shahin')
greeting(greetinHandeler, 'Rifat')
greeting(eveningHandeler, 'sujon')