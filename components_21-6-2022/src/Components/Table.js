import React from 'react';
import './table.css';
// import { MDBCheckbox } from 'mdb-react-ui-kit';

function Table() {
    return (
        <table class="table">
      
        <tbody>
          <tr>
           
            <td>
                <img src="https://th.bing.com/th/id/OIP.k8BxQA7_sk9eRArkWGbCDAHaE-?w=245&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" width={'50px'} height={'50px'} alt={''}></img>
                <input className="check" type='checkbox' />
            <label>HTML</label>
                {/* <>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='HTML' />
                </> */}
            </td>
            
          </tr>
          <tr>
            
            <td>
            <img src="https://th.bing.com/th/id/OIP.75iRv1lGMzxg-czstiKUUgHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" width={'50px'} height={'50px'} alt={''}></img>
            <input className="me-2" type='checkbox' />
            <label>PHP</label>
            </td>
           
          </tr>
          <tr>
            
            <td>
            <img src="https://th.bing.com/th?q=CSS+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" width={'50px'} height={'50px'} alt={''}></img>
            <input className="me-2" type='checkbox' />
            <label>CSS</label>
            </td>
           
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default Table;