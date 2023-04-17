import { useCallback } from 'react';
import { ElementFlags, JsxElement } from 'typescript';
import styles from './PlotElements.module.css'


interface XAxysProps{
	showIndicators?:boolean;
}

const Xaxys:React.FC<XAxysProps> = ({showIndicators}) => {

	const indicators:number[]=[1,2,3,4];

	const xAxys=document.getElementById('XAxys');
	if(xAxys){
		const xAxysWidth:number=xAxys.getBoundingClientRect().width;
		const numberOfIndicators=xAxysWidth/45;
		const xZeroCoord = xAxys.getBoundingClientRect().x+xAxysWidth/2;
	}
	
	

  

 	return (
   	<div className={styles.XAxys} id='XAxys'>
			{indicators.map((number,idx)=>{
				return(
					<div className={styles.indicator} key={idx}></div>
				)
			})}
			
			
		</div>
  	)
}

export default Xaxys