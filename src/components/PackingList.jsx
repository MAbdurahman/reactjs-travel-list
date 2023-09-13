import React from 'react';
import {initialItems} from "../initialItems";
import PackingItem from "./PackingItem";

export default function PackingList() {

    return (
        <div className="list">
            <ul>
                {initialItems.map(item => <PackingItem key={item.id} item={item}/>)}
            </ul>

        </div>

    );
};


