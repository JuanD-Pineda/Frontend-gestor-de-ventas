import Sidebar from '../components/sidebar';
import Nav from '../components/nav';
import React from 'react';
import '../styles/style.css';

const layout = ({children})=>{
return(
    <div className='overflow-x-hidden overflow-y-hidden bg-white    portatil:text-4xl  Monitor:text-2xl '>
        <div className='tablet:flex tablet:flex-row  displaygrid'>

        <div>
           <Nav />

           <div className='tablet:flex'>
                 <Sidebar className='sidebar' />

                <div className='portatil: celular:flex celular:flex-col contenedor celular:h-screen w-full '>
                    <div>{children}</div>
                </div> 

           </div>
           
        </div>

      


      
    
      

       
        
       

        </div>
       
    </div>
);  

}


export default layout;