import ListItem from "./ListItem";
import {IListItem} from "./ListItem";

interface ListingProps{
    items:IListItem[]
}

function Listing({items}:ListingProps) {
    const itemsProp = (items === undefined || items === null) ? [] : items;

    return (
        <div className="items-list">
        <ul >
            {
                itemsProp.map((item) => {
                    return (
                            <ListItem item={item}/>
                    )
                })
            }
        </ul>
        </div>
    )
};

export default Listing;