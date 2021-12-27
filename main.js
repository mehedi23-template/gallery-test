class gallery {
    constructor(className , option) {
        this.classNameLoop(className , option);
    };

    classNameLoop(e , option){
        const queries = Array.from(document.querySelectorAll(e));

        for(let i = 0 ; queries.length > i ; i++){
            this.galleryStyle(queries[i] , option);
            this.galleryBoxStyle(queries[i].children , option);
        };
    };

    galleryStyle(e , option){
        e.style.display = "grid";
        !option.gap && (e.style.gap = "10px");
        !option.box && (e.style.gridTemplateColumns = "repeat(4, 1fr)");
        option.gap && (e.style.gap = option.gap);
        option.box && (e.style.gridTemplateColumns = `repeat(${option.box}, 1fr)`);
    };

    galleryBoxStyle(e , option){
        for(let i = 0 ; e.length > i ; i++){
            e[i].style.overflow = "hidden";
            option.boxHeight && (e[i].style.height = option.boxHeight);
            !option.boxHeight && (e[i].style.height = "180px");

            e[i].children[0].style.height = "100%";
            e[i].children[0].style.width = "100%";
        };
    };

};

