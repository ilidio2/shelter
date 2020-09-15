class New {
    dia;
    mes;
    ano;
    titulo;
    descricao;
    criador;

    constructor() {

        this.news = new Array();
        this.news[0] = new News(24,0,2018, "Criação da Banda", "Com o nome Shelter of Paper","joao");
        this.news[1] = new News(13,1,2020, "1º concerto", "Concerto na festa de Ribamar","nuno");
        this.news[2] = new News(23,3,2020, "Inicio de gravações", "SoP começam hoje as gravações do primeiro album","nuno");
        this.news[3] = new News(13,2,2020, "Trailer do novo single", "SoP mandaram hoje para a rua um trailer para o seu novo single","nuno");
        this.news[4] = new News(13,4,2020, "Novo Single", "In my Heart é o novo single dos SoP ","nuno");
        this.news[5] = new News(13,4,2020, "Novo Álbum", "Com o titulo de Time to Begin, SoP lançam o seu primeiro album.","nuno");
       

    }

    get2News() {
        let news = new Array();
        news = this.news.slice(-2)
       

        let sortedNews = news.sort((a, b) => b.date - a.date)
        return sortedNews

    }

    getAllNews() {
        let news = new Array()
        news = this.news
        let sortedNews = news.sort((a, b) => b.date - a.date)
        return sortedNews
    }

}
