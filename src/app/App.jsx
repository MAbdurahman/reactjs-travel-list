import React, {useState} from 'react';
import Header from "../layouts/Header";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Footer from "../layouts/Footer";

export default function App() {

    return (
        <div className='app'>
            <Header />
            <Form />
            <PackingList />
            <Footer />
        </div>

    );
};