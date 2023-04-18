import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './PlotElements.module.css'

interface XAxysProps{
   showIndicators?:boolean;
   functionToPlot?:string;
}

const Xaxys:React.FC<XAxysProps> = ({showIndicators,functionToPlot}) => {

   const [indicators, setIndicators] = useState<{i: number, distanceFromOrigin: number}[]>([]);
   const xAxysRef = useRef<HTMLDivElement>(null);
	let xZeroCoord:number;
	let xAxysWidth:number;

   useEffect(() => {

      if(xAxysRef.current){

			xAxysWidth = xAxysRef.current.getBoundingClientRect().width;
			const numberOfIndicators = 10;
			xZeroCoord = xAxysRef.current.getBoundingClientRect().x + xAxysWidth / 2;

			

			let indicatorsArr = [];

			for(let i = 0; i < numberOfIndicators; i++){
				indicatorsArr.push({
					i,
					distanceFromOrigin: i * 100 +xAxysWidth/2
				})
			}
			
			setIndicators(indicatorsArr);
			console.log({indicatorsArr});
		}
		
   }, []);
	
	return (
		<div className={styles.XAxys} ref={xAxysRef}>
			{indicators.map((indicator,idx)=>(
					<div 
						className={styles.indicator}
						style={{left:`${indicator.distanceFromOrigin}px`}}
						key={idx}
					>
					</div>
			))}
			{indicators.map((indicator,idx)=>(
					idx!=0 && <div 
						className={styles.indicator}
						style={{left:`${indicator.distanceFromOrigin-idx*200}px`}}
						key={idx+10}
					>
					</div>
			))}

		</div>
	)
}

export default Xaxys