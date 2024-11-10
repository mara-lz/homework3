export interface IListItem{
    listingId:number,// уникальный идентификатор предложения
    url:string,// ссылка на предложение
    mainImageUrl:string, // информация об изображении
    title:string, // название предложения
    currencyCode:string, // код валюты
    price:string, // цена
    quantity:number // доступное количество
}

interface ListItemProps{
    item:IListItem
}

function ListItem({item}:ListItemProps){
    let titleFull:string =(item.title.length>50)?item.title.substring(0,50)+'…':item.title;

    let priceFull:string ='';
    if (item.currencyCode==='USD'){
        priceFull='$'+item.price;
    }
    else if (item.currencyCode==='EUR'){
        priceFull='€'+item.price;
    }
    else {
        priceFull=item.price+' '+item.currencyCode;
    }

    let quantityClassName:string ='item-quantity';
    if (item.quantity<=10){
        quantityClassName+=' level-low';
    }
    else if (item.quantity<=20){
        quantityClassName+=' level-medium';
    }
    else{
        quantityClassName+=' level-high';
    }

    return(
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.mainImageUrl} alt={item.title}/>
                    </a>
                </div>
                <div>
                    <p className="item-title">{titleFull}</p>
                    <p className="item-price">{priceFull}</p>
                    <p className={quantityClassName}>{item.quantity} left</p>
                </div>
            </div>
        </div>
    )
}

export default ListItem;