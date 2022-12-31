// https://cn.ttkan.co/api/nq/amp_novel_chapters?language=cn&novel_id=yangshengwusheng_congpaojiaokaishi-xufu&__amp_source_origin=https://cn.ttkan.co
function execute(url) {
	let reader = '&__amp_source_origin=https://cn.ttkan.co';
    let lin1 = url.replace('https://cn.ttkan.co/novel/chapters/','');
    let nUrl1 = url.replace('cn.ttkan.co/novel/chapters/','cn.ttkan.co/api/nq/amp_novel_chapters?language=cn&novel_id=') ;
    let nUrl = nUrl1 + reader;
    let response = fetch(nUrl);
    if (response.ok) {
        
        let res_json = response.json();
        console.log(res_json)        
        let allBook = res_json.items;
        
        const book = [];
        for (let i = 0; i < allBook.length; i++) {
            let item = allBook[i];
            
            book.push({
                    name: item.chapter_name,           
                    url: "https://cn.ttkan.co/novel/pagea/" + lin1 +"_"+item.chapter_id + ".html",
                    host: "https://cn.ttkan.co"
        })
        }
        
        return Response.success(book);  
    }
    return null;
}