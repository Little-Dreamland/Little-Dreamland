function load(){
    var num = document.getElementById("number");
    if(num!=""){
        var URL;
        switch(num){
            case 1: URL="https://pcs.baidu.com/rest/2.0/pcs/file?method=download&access_token=23.3aaf726f7aacf2b4d568a534d84cc8b9.2592000.1518227007.4048274373-498065&path=%2Fapps%2Fyhy%2F%E3%80%90%E5%9F%BA%E7%A1%80%E3%80%91%E6%A6%82%E7%8E%87%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1%2F%E7%AC%AC1%E7%AB%A0+%E9%9A%8F%E6%9C%BA%E4%BA%8B%E4%BB%B6%E5%92%8C%E6%A6%82%E7%8E%87%2F171+%E6%A6%82%E7%8E%87-%E5%AF%BC%E5%AD%A6.avi";
            default : alert("FAIL TO FIND");
        }
    var dp = new DPlayer({
        element: document.getElementById('dplayer'),
        video: {
            url: 'https://pcs.baidu.com/rest/2.0/pcs/file?method=download&access_token=23.3aaf726f7aacf2b4d568a534d84cc8b9.2592000.1518227007.4048274373-498065&path=%2Fapps%2Fyhy%2F%E3%80%90%E5%9F%BA%E7%A1%80%E3%80%91%E6%A6%82%E7%8E%87%E4%B8%8E%E6%95%B0%E7%90%86%E7%BB%9F%E8%AE%A1%2F%E7%AC%AC3%E7%AB%A0+%E5%A4%9A%E7%BB%B4%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F%E5%8F%8A%E5%85%B6%E5%88%86%E5%B8%83%2F191+%E5%A4%9A%E7%BB%B4%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F%E5%8F%8A%E5%85%B6%E5%88%86%E5%B8%83-1.mp4'
            },
            danmaku: {
                id: 'ROYIANS',
                api: 'https://api.prprpr.me/dplayer/'
            }
        });
    }else{alert("You Didn't Input Any Number!");}
}