

const dayOfWeek = new Date().getDay();


// normalmente usando Switch

switch(dayOfWeek){
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text ="Looking forward to the Weekend";
}

// usando Object Literals, note que esta no plural

const daysOfWeek = {
    0: "Today is Sunday",
    6: "Today is Saturday"
}

const text = daysOfWeek[dayOfWeek] || "Looking forward to the Weekend";

// Object Literals é o como se chama, você pode simplesmente em vez de ficar adicionando cases num switch ou blocos de if...else, você simplesmente pode adicionar uma propriedade a um objeto, e essas propriedades podem ser chamadas por chave dinânima, recebendo uma função ou até mesmo retornando somente um valor..

//creditos: https://www.linkedin.com/in/vitormomberg/