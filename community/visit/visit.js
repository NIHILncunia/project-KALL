
let naver = document.getElementById('naver'),
    google = document.getElementById('google'), 
    map_naver = document.getElementById('mapping_naver'), 
    map_google = document.getElementById('mapping_google');


    map_google.classList.add('hidden');

    naver.addEventListener('click', click);
    google.addEventListener('click', click);


    function click(e) {
        console.log(e.target);

        e.preventDefault();
        if(e.target === naver) {
            map_google.classList.add('hidden');
            map_naver.classList.remove('hidden');
        } else if(e.target === google){
            map_naver.classList.add('hidden');
            map_google.classList.remove('hidden');
        }
    }



