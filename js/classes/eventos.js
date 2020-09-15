class Evento {
    dia;
    mes;
    ano;
    hora;
    local;
    rua;
    cidade;
    criador;

    constructor() {

        this.eventos = new Array();
        this.eventos[0] = new Event(2, 3, 2019, "23h", "Bless", "Rua Central", "Lourinhã", "João");
        this.eventos[1] = new Event(3, 4, 2020, "23h", "Guess", "Rua da Universidade", "Torres Vedras", "João");
        this.eventos[2] = new Event(4, 5, 2020, "21h", "Rio Bar", "Rua de Santa Bárbara", "Lourinhã", "Nuno");
        this.eventos[3] = new Event(16, 6, 2020, "22h", "Estádio do Restelo", "Rua do Estádio", "Lisboa", "Carlos");
        this.eventos[4] = new Event(17, 7, 2020, "23h", "José de Alvalade", "Rua de Alvalade", "Lisboa", "Nuno");
        this.eventos[5] = new Event(18, 8, 2020, "01h", "Pavilhão Atlântico", "Avenida Central", "Lisboa", "Nuno");
        this.eventos[6] = new Event(19, 3, 2020, "23h", "Mar do Norte", "Rua de Porto Dinheiro", "Porto Dinheiro", "Nuno");
        this.eventos[7] = new Event(2, 3, 2021, "23h", "Muralha Bar", "Praça da Areia Branca", "Areia Branca", "João");
        this.eventos[8] = new Event(4, 3, 2021, "23h", "Rio Bar", "Rua de Santa Bárbara", "Lourinha", "Nuno");
        this.eventos[9] = new Event(6, 3, 2021, "23h", "Rockline", "Praça de França", "Torres Vedras", "Carlos");
      
    }

    get5Events() {

        let eventosProximos = new Array();
        eventosProximos = this.eventos.filter(evento => {  return evento.date.getTime() > (new Date().getTime()) })

        let sortedEvento = eventosProximos.sort((a, b) => a.date - b.date)

        let eventos5Proximos = sortedEvento.slice(0, 5)

     

        return eventos5Proximos

    }

    getAllEvents() {

        let eventosProximos = new Array();
        eventosProximos = this.eventos.filter(evento => {  return evento.date.getTime() > (new Date().getTime()) })

        let sortedEvento = eventosProximos.sort((a, b) => a.date - b.date)

       

     

        return sortedEvento

    }

    
}