/*
 * @Author: Tim Koepsel 
 * @Date: 2019-03-02 15:31:01 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-03-03 18:37:04
 */


 import React from 'react';
 import './GenderSelector.scss';
 import { Button } from 'semantic-ui-react'

 class GenderSelector extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
            selectedGender: null,
            result: props.result 
         };

         this.SelectGender = this.SelectGender.bind(this);
     }

     SelectGender(gender) {
         this.setState({
             selectedGender: gender
         });
     }
 
     render() {
         return (
             <div>
                <Button size='massive' icon='male' color='blue' onClick={()=>{this.SelectGender('male')}}  circular></Button>
                <Button size='massive' icon='female' color='pink' onClick={()=>{this.SelectGender('female')}} circular></Button>

                <div>
                    <h1>Ergebnis</h1>
                    {this.state.selectedGender}
                </div>
             </div>
         )
     }
 }
 export default GenderSelector;
 
 