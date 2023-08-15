meals = {
    meal1:{
        name: "Etliekmek",
        image: "etliekmek.jpg",
        description: "Etli ekmek, Türk mutfağına ait geleneksel bir yemektir. Genellikle ince hamurun üzerine dövülmüş et, sebzeler ve baharatlarla hazırlanan bir tür pizza veya lahmacun tarzı yemektir. Adından da anlaşılacağı gibi, etli ekmek hamurun üzerine yerleştirilen etle yapılan bir yemektir.Yöresel olarak farklı şekillerde hazırlanabilir, bazı bölgelerde kıyma et, soğan, domates, biber gibi malzemelerle hazırlanırken, bazı bölgelerde daha zengin iç harçlar kullanılabilir. Hamur genellikle ince açılır, üzerine et ve diğer malzemeler yerleştirilir, ardından fırınlanarak pişirilir.Etli ekmek, özellikle Türkiye'nin bazı bölgelerinde sokak lezzeti olarak da popülerdir. Her ne kadar isminde 'ekmek' geçse de, daha çok hamur tabanlı bir yemek türüdür ve pizzaya benzeyen bir sunum şekli vardır.",
        category:"meat",
        area: "Turkey",
        tags:"meat, bread",
        ingredients:["Meat","Floor","Tomato","Onion"],
        link:"https://www.youtube.com/watch?v=vp5DSJABjdM"
    },
    meal2:{
        name: "Mantı",
        image: "manti.jpg",
        description: "Mantı, geleneksel Türk mutfağına ait bir yemektir. Genellikle küçük hamur parçalarının içine etli veya etsiz harç doldurularak yapılan bir çeşit dolma çeşididir. Mantı, özellikle yoğurt ve salçalı sosla servis edilen, zengin lezzetlere sahip bir yemektir. Türkiye'de olduğu gibi, Orta Asya ve Orta Doğu mutfağında da farklı varyasyonları bulunmaktadır. Mantı, genellikle ince hamurun kesilip veya kalıplarla kesilerek içine doldurulduğu, üçgen veya kare şeklinde küçük parçalardan oluşur. Daha sonra bu hamur parçaları kaynar su veya suda haşlanarak pişirilir. Hamurun içindeki harç ise genellikle kıyma (et) veya patates, soğan karışımı olabilir. Mantıların pişirildikten sonra üzerine erimiş tereyağı ve naneli yoğurt dökülür. Ayrıca, üzerine salça sosu da eklenerek servis edilir. Mantının yoğurt ve salça ile birleşen lezzeti oldukça popülerdir. Mantı, Türk mutfağının önemli ve sevilen yemeklerinden biridir. Hem evlerde hem de restoranlarda sıkça hazırlanır ve tüketilir. Aynı zamanda özel günlerde, kutlamalarda ve davetlerde de sofraların vazgeçilmezlerinden biridir.",
        category:"meat",
        area: "Turkey",
        tags:"meat, bread",
        ingredients:["Meat","Floor","Yogurt"],
        link:"https://youtu.be/0G0NUrzjZc8"
    },
    meal3:{
        name: "Suşi",
        image: "sushi.jpg",
        description: "Sushi, geleneksel Japon mutfağına ait bir yemektir ve genellikle balık, deniz ürünleri, sebze ve pirinç gibi malzemelerin kullanıldığı bir yemek türüdür. Sushi, pirinç sirkesi ile tatlandırılmış özel sushi pirinci ile hazırlanır ve çeşitli şekillerde sunulur. Sushi, Japonya dışında da popüler hale gelmiş ve dünya genelinde farklı varyasyonları ve stilleri bulunan bir yemek haline gelmiştir.",
        area: "Japanese",
        tags:"fish, rice",
        ingredients:["Fish","Rice","Moss"],
        link:"https://youtu.be/zL6esYnWxmc"
    }
}
var button = document.getElementById("button");
var box = document.getElementById("box");
var baslik = document.getElementById("baslik");
var resim = document.getElementById("resim");
var icerik = document.getElementById("icerik");
var body = document.getElementById("body");
var box1 = document.getElementById("box1");
var category = document.getElementById("c");
var area = document.getElementById("a");
var tags = document.getElementById("t");
var link = document.getElementById("link");
var myList = document.getElementById("ul");


button.addEventListener('click', function(){
    box1.style.margin = "10px";
    box1.style.marginLeft = "32%";
    body.style.margin ="10px";
    box.style.display ='flex';
    myList.innerHTML="";
    var sayi = Object.keys(meals)[Math.floor(Math.random() * Object.keys(meals).length)];
    baslik.innerHTML = meals[sayi].name;
    resim.src = meals[sayi].image;
    icerik.innerHTML = meals[sayi].description;
    category.innerHTML = meals[sayi].category;
    area.innerHTML = meals[sayi].area;
    tags.innerHTML = meals[sayi].tags;
    link.href = meals[sayi].link;
    for(let i =0;i<meals[sayi].ingredients.length;i++){
        var newLi = document.createElement("li");
        newLi.innerHTML = meals[sayi].ingredients[i];
        var targetElement = document.querySelector(".ul");
        targetElement.appendChild(newLi);
    };
});
