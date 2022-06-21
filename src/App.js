import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import OtterList from './components/OtterList.js';

const starterOtterData = [{id:1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAnDPZqcpAp7lrQeZ2qJI_fsvDxDzttF4rg&usqp=CAU", likes:0, hearts:0},
                   {id:2, img:"https://unsplash.com/photos/axqTLZ12Jss", hearts:0, likes:0},
                   {id:3, img:"https://www.bioexpedition.com/wp-content/uploads/2014/03/Otter_In_Funny_Position_600.jpg", hearts:0, likes:0},
                   {id:4, img:"https://www.rd.com/wp-content/uploads/2020/04/GettyImages-74582273-scaled.jpg", hearts:0, likes:0}
                ]

//function App() {
const App = () => {
    const [otterData, setOtterData] = useState(starterOtterData);

    const updateOtterHeartFn = (id) => {
        console.log("todo: update heart for id");

        const newOtterData = otterData.map((otter) => {
            const newOtter = {...otter};
            if(newOtter.id === id) {
                newOtter.hearts += 1;
            }
            return newOtter;
        })
        setOtterData(newOtterData);
    }
    const updateOtterLikeFn = (id) => {
        console.log("todo update otter like function");
        const newOtterData = [];
        for(const otter of otterData) {
            const newOtter = {...otter};
            if(newOtter.id === id) {
                newOtter.likes += 1;
            }
            newOtterData.push(newOtter);
        }
        setOtterData(newOtterData);

    }

  return (
    <OtterList otterData = {otterData} 
    updateOtterHeart={updateOtterHeartFn} 
    updateOtterLike={updateOtterLikeFn} />
  );
}

export default App;
