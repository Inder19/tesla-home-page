import React from 'react';
import Header from './Header';
import Item from './Item';
import './App.css'

import Access from './assects/Access.jpg';
import Model3 from './assects/Model31.png';
import ModelS from './assects/ModelS.jpg';
import ModelX from './assects/modelX.jpg';
import ModelY from './assects/ModelY.jpg';
import SolorPanel from './assects/SolorPanel.png';
import SolorRoof from './assects/SolorRoof.jpg';

function App() {
  return (
    <div>
      
     <Header />
      <div className="app_itemsContainer">
        <Item 
        title='Lower Cost Solor Panels in America'
        desc='Money-Back guarantee'
        descLink=''
        backgroundImg={SolorPanel}
        leftBtnTxt='Order Now'
        leftBtnLink=''
        rightBtntxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
         <Item 
        title='MODEL S'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='Custom Order'
        leftBtnLink=''
        rightBtntxt='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title='MODEL Y'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='Order Now'
        leftBtnLink=''
        rightBtntxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title='MODEL 3'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='Order Now'
        leftBtnLink=''
        rightBtntxt='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title='MODEL X'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='Order Now'
        leftBtnLink=''
        rightBtntxt='Existing Inventory'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title='Solar for New Roofs'
        desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        descLink=''
        backgroundImg={SolorRoof}
        leftBtnTxt='Order Now'
        leftBtnLink=''
        rightBtntxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
         <Item 
        title='Accessories'
        backgroundImg={Access}
        leftBtnTxt='Shop Now'
        leftBtnLink=''
        rightBtntxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='false'
        />
      </div>
    </div>
  )
}

export default App
