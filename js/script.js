/* Descrizione:
Partendo dal template fornito renderizzare lo slider con Vue
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e
farlo riprendere quando esce */

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const carousel = new Vue({
    el: "#app",
    data: {
        slides,
        slideIndex: 0,
    },
    methods: {
        previousSlide() {
            this.slideIndex--
            if (this.slideIndex < 0) {
                this.slideIndex = this.slides.length - 1;
            }
        },
        nextSlide() {
            this.slideIndex++
            if (this.slideIndex > this.slides.length - 1) {
                this.slideIndex = 0;
            }
        },
        displayActiveImage(item) {
            const verify = item.title === this.slides[this.slideIndex].title;
            return verify ? "thumb active" : "thumb"
        },
        showSlide(index) {
            const clickImage = index;
            this.slideIndex = clickImage;
        },
        scrollingSlides() {
            setInterval(() => { this.nextSlide() }, 3000)
        }
    },
    mounted() { this.scrollingSlides() }
});

