function load() {
    var ElemID = document.getElementById("ElemID").value;
    var command = document.getElementById("ElemCommand").value;
    if(ElemID==1024){
        var items = resource[1];
        if(command==items.command){
            var url="http://api.zuilingxian.com/jiexi.php?url=";
            var preurl=prompt("请输入URL[带上http://]");
            url += preurl;
            var iframe = document.getElementById("image");
            var inputbox = document.getElementById("something");
            inputbox.remove();
            iframe.src=url;
            $('#play').append("正在播放："+ resource[TrueID].title);
        }else{
            alert("您输入的口令有误！");
        }
    }else{
        var TrueID=-1 ;
        for(var i=0;i<resource.length;i++){
            if(ElemID == resource[i].ID){
                TrueID=i;
                //alert(TrueID);
            }
            //alert("ok+"+TrueID);
        }
        if(TrueID==-1){
            alert("您输入的ID有误！");
        }else{
            var item = resource[TrueID];
            alert(TrueID);
            alert(command);
            alert(item.command);
            if(command==item.command){
                var url = resource[TrueID].url;
                alert(url);
                var iframe = document.getElementById("image");
                var inputbox = document.getElementById("something");
                inputbox.remove();
                iframe.src=url;
                $('#play').append("正在播放："+ resource[TrueID].title);
            }else{
                alert(item.command);
                alert("您输入的口令有误！");
            }
        }
    }
}
