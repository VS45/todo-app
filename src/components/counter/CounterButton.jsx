
import "./Counter.css"
import PropTypes from 'prop-types'
export default function  CounterButton({by,incrementMethod,decrementMethod}) {
     function incrementCounter(){
 incrementMethod(by)
     }
     function decrementCounter(){
 decrementMethod(by)
     }
   return (
     <div className='Counter'>
         <div>
         <button className='counterButton' onClick={incrementCounter}>+{by}</button>
         <button className='counterButton' onClick={decrementCounter}>-{by}</button>
         </div>
     </div>
   )
 }
 
 CounterButton.propTypes={
   by:PropTypes.number
 }
 
 CounterButton.defaultProps={
     by:1
 }