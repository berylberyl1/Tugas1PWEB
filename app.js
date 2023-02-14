const app = Vue.createApp({
        data(){
            return{
                title: 'Tugas 1 Pemrograman Web',
                name: 'Beryl',
                id: 5025201029,
                age: 20,

                image: 'https://i.pinimg.com/originals/59/eb/cc/59ebcca8c4a8a626e6d3d45d3d37ebb2.jpg',

                randomLinks: [
                    {title: 'Bored Button', link: 'https://www.boredbutton.com/', highlight: false},
                    {title: 'VisuAlgo', link: 'https://visualgo.net/en', highlight: false},
                    {title: 'Secret', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', highlight: false}
                ],

                listShow: false,
                profileShow: false,
                linkShow: false,
                favShow: false,
                
                x: 0,
                y: 0
                
            }
        },
        methods:{
            changeTitle(title){
                this.title = title
            },

            increaseAge(age){
                this.age++
            },

            decreaseAge(age){
                this.age--
            },

            showProfile(){
                this.profileShow = !this.profileShow
            },

            showLink(){
                this.linkShow = !this.linkShow
            },
            
            showList(){
                this.listShow = !this.listShow,
                this.profileShow = false,
                this.linkShow = false
            },

            showFav(){
                this.favShow = !this.favShow
            },

            highlightLink(randomLinks){
                randomLinks.highlight = !randomLinks.highlight
            },

            mousePosition(e){
                this.x = e.offsetX
                this.y = e.offsetY
            }


        },

        computed: {
            favoritedLink(){
                return this.randomLinks.filter((rdlink) => rdlink.highlight)
            }
        }
    }
)
app.mount('#app')