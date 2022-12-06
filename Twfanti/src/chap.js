function execute(url) {
    const doc = fetch(url).html();
    var content = doc.select("#pt-pop").html();
    var nextPage = doc.select('.pt-nextchapter a').last();
    
        var doc2 = fetch('https://m.twfanti.com'+nextPage.attr('href')).html();
        content += doc2.select("#pt-pop").html();
        var nextPage = doc2.select('.articlebtn a').last();
    
    content = content.replace(/<p><\/p>/g,'')
    return Response.success(content);
}