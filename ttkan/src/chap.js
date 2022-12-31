function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("p").html();
        htm = htm.replace(/\n/g,'。<br><br>');
        
        return Response.success(htm);
    }
    return null;
}