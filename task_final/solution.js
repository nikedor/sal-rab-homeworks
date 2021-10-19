    function sendRequest(name, phone, address, goods, sum) {
        let data = {client: {}, order: {}, goods: []};
    
        data.client = `${name} ${phone}`;
        
        data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
        data.order.sum = sum;
        
        let countOfGoods = goods.length;
    
        for (let i = 0; i < countOfGoods; i += 1) {
            data.goods.push({title: goods[i].title, count: goods[i].count});
        }
       
    let jsonData = JSON.stringify({data});
    
        return jsonData;
    }