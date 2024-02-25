class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
}
const siplu = new teacher('Siplu', 'Math')
console.log(siplu);

const sumon = new teacher('Sumon', 'Chemistry')
console.log(sumon);

const rigan = new teacher('Rigan', 'English')
console.log(rigan);

// ===================================================
//                 Inheritance
// ===================================================
class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari cole');
    }
}

class bus extends vehicle{
    constructor(name, price, seat ,ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class track extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;        
    }
}