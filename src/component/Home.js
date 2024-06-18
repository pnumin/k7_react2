import logo from '../logo.svg' ;
import { useRecoilState } from 'recoil';
import { atom1, atom2  } from '../atoms/Atom1';
// import { atom2 } from '../atoms/Atom2';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const [ at1 , setAt1] = useRecoilState(atom1) ;
  const [ at2 , setAt2] = useRecoilState(atom2) ;
  const [ newArea , setNewArea] = useState() ; 
  const refAt1 = useRef() ;
  const refAt2 = useRef() ;

  const handleAtom = () => {
    setNewArea(refAt1.current.value) ;
  }
 
  const handleAtom2 = () => {
    setAt1('');
    setAt2('');
  }


  useEffect(() => {
    if (!at1) setAt1(newArea) 
    else setAt2(newArea) 
  } ,  [newArea]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <img src={logo} width="100%" alt='logo'/>
      </div>
      <div className='text-2xl'>
        K-digital 김경민
        <input type="text" ref={refAt1} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        {/* <input type="text" ref={refAt2} 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
        <button onClick={handleAtom}>Atom</button> 
        <button onClick={handleAtom2}>Atom2</button> 
      </div>
      
    </div>
  )
}
