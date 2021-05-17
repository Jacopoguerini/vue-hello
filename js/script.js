var app = new Vue ({
    el: "#root",
    data: {
        message: "Hello World!",
        colorClass: "green",
        imgUrl: "https://it.vuejs.org/images/logo.png"
    },
    methods: {
        changeColor: function () {
            if (this.colorClass == "green") {
                this.colorClass = "blue";
            } else {
                this.colorClass = "green";
            }
        },

        changeImg: function () {
            if (this.imgUrl == "https://it.vuejs.org/images/logo.png") {
                this.imgUrl = "https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg"
            } else {
                this.imgUrl = "https://it.vuejs.org/images/logo.png";
            }
        } 
    }
});

