function execute(url) {
    let cvData = "";
    let last = ""
    const next = url.replace("http://u.plhydp.com", "").replace("https://u.plhydp.com", "").replace(".html","");
    let count = 1;
    while (true) {
        let next2 = next + "_" + count;
        let response = fetch("http://u.plhydp.com" + next2 +".html?a=1");
        console.log("http://u.plhydp.com" + next2 +".html?a=1")
        if (response.ok) {
            let json = response.json();
            let htm = json.txt;
            console.log(htm)
            if(htm === last) {
                return Response.success(cvData);
            }
            else{
                last = htm
                cvData +=htm;
                count++;
            }
        }
    }
    return null;
}