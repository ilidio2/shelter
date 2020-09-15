let playing = false
let currentSong
class gui {

    constructor() {
        this.event = new Evento();
        this.new = new New();
        this.music = new Musica();
        this.contact = new Contacto()
    }

    Init(url) {


        switch (url) {
            case "/":

                let fiveEvents = this.event.get5Events();

                this.createEvent(fiveEvents)

                let twoNews = this.new.get2News();

                this.createNew(twoNews)
                new Glider(document.querySelector('.glider'), {
                    slidesToShow: 1,
                    dots: '#dots',
                    draggable: true,
                    scrollLock: false,

                    arrows: {
                        prev: '.glider-prev',
                        next: '.glider-next'
                    }
                });

                this.createMusicPlayer(this.music)



                break;
            case "/events":

                let allEvents = this.event.getAllEvents();
                console.log(allEvents)
                this.createEvent(allEvents)

                break;


            case "/contact":

                console.log(this.contact)
                document.getElementById("email").innerHTML = this.contact.contactos.email
                document.getElementById("telefone").innerHTML = this.contact.contactos.telefone
                break;

            case "/music":
                this.createMusicPlayer(this.music)
                break

            case "/news":
                let allNews = this.new.getAllNews();
                this.createAllNews(allNews);
                break


            default:
                break;
        }

    }

    createMusicPlayer() {




        let player = document.querySelector(".audio-player")

        const currentSongPlaying = document.getElementById("currentSongPlaying")

        currentSongPlaying.innerHTML = this.music.musicas[0].nome;
        currentSong = this.music.musicas[0].src;
        player.src = currentSong

        this.music.musicas.forEach(element => {

            let li = document.createElement("li");
            li.className = "liMusic"
            let arrow = document.createElement("i");
            arrow.className = "fa fa-play play-arrow"
            arrow.id = "arrow"

            let a = document.createElement("a");
            a.className = "aMusic"

            a.href = element.src;
            a.innerHTML = element.nome;
            a.addEventListener("click", (e) => {
                e.preventDefault();

                playPause(element, playing, player, currentSongPlaying, arrow)
            }
            )

            arrow.addEventListener("click", (e) => {
                e.preventDefault();
                playPause(element, playing, player, currentSongPlaying, arrow)
            }
            )


            li.appendChild(arrow);
            li.appendChild(a);
            document.querySelector(".play-list").appendChild(li)
            document.querySelector(".fa-play").className = "fa fa-play play-arrow onPlay"

        })

    }



    createNew(news) {
        news.forEach(element => {
            let div = document.createElement("div");
            div.className = "latestest-news";
            div.innerHTML = document.getElementById("news_template").innerHTML;
            div.querySelector(".tituloNew").innerHTML = element.titulo;
            div.querySelector(".descNew").innerHTML = element.descricao;
            document.querySelector(".glider").appendChild(div);

        })
    }

    createAllNews(news) {
        news.forEach(element => {
            let div = document.createElement("div");
            div.className = "latestest-news";
            div.innerHTML = document.getElementById("news_template").innerHTML;
            div.querySelector(".tituloNew").innerHTML = element.titulo;
            div.querySelector(".descNew").innerHTML = element.descricao;

            div.querySelector(".dataCriacao").innerHTML = "Criado a: " + element.date.getDate() + "/" + (element.date.getMonth() + 1) + "/" + element.date.getFullYear();
            document.querySelector(".container").appendChild(div);

        })
    }

    createEvent(eventos) {
        eventos.forEach(element => {
            let div = document.createElement("div")

            div.className = "evento"

            div.innerHTML = document.getElementById("evento_template").innerHTML

            div.querySelector(".event-date").innerHTML = element.date.getDate() + "/" + (element.date.getMonth() + 1) + "/" + element.date.getFullYear();

            div.querySelector(".event-local").innerHTML = element.local;

            div.querySelector(".event-city").innerHTML = element.cidade;
            div.querySelector(".event-hora").innerHTML = "Hora de começo: " + element.hora;
            div.querySelector(".event-rua").innerHTML = "Morada:  " + element.rua;

            div.querySelector(".arrow").addEventListener('click', () => {

                div.querySelector(".eventInfo").classList.toggle("active")
                div.querySelector(".fa-chevron-down").classList.toggle("active")

                console.log("2")
            })

            // event.showAllInfoEvent(element)


            document.querySelector(".concertos-container").appendChild(div)


        });
    }

    showAllInfoEvent(selectedEvent) {
        console.log(selectedEvent)
        return selectedEvent
    }

}


