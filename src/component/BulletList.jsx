import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css'
import Header, {ParagraphSection} from './component/HeaderSection'
import BulletList from './component/BulletList'

const root = document.querySelector('#root');
const items = ["Mango", "Tomato", "Kiwi", "Dragon Fruit"]

createRoot(root).render(
    <>
    <Header name="Rahul" age={27} isAdult={true} />
    <ParagraphSection />
    <BulletList items={items} />
    </>
)