import React from 'react'
import styled from 'styled-components'

// $input-number-size: 80px;

const QtySelectorContainer = styled.div`
    display: flex;
    justify-content: center;

` 
// .input-number-group {

//   input[type=number]::-webkit-inner-spin-button,
//   input[type=number]::-webkit-outer-spin-button {
//     appearance: none;
//   }

//   .input-group-button {
//     line-height: calc(#{$input-number-size}/2 - 5px);
//   }

//   .input-number {
//     width: $input-number-size;
//     padding: 0 12px;
//     vertical-align: top;
//     text-align: center;
//     outline: none;
//     display: block;
//     margin: 0;
//   }

//   .input-number,
//   .input-number-decrement,
//   .input-number-increment {
//     border: 1px solid $medium-gray;
//     height: $input-number-size/2;
//     user-select: none;
//     border-radius: $global-radius;
//   }

//   .input-number-decrement,
//   .input-number-increment {
//     display: inline-block;
//     width: $input-number-size/2;
//     background: $light-gray;
//     color: $body-font-color;
//     text-align: center;
//     font-weight: bold;
//     cursor: pointer;
//     font-size: 2rem;
//     font-weight: 400;
//   }

//   .input-number-decrement {
//     margin-right: 0.3rem;
//   }

//   .input-number-increment {
//     margin-left: 0.3rem;
//   }
// }




const QtySelector = (props) => {

    return(
        <QtySelectorContainer>
            <div class="input-group-button">
                <span class="input-number-decrement">-</span>
            </div>
            <input class="input-number" type="number" value="1" min="0" max="1000">
            <div class="input-group-button">
                <span class="input-number-increment">+</span>
            </div>
        </QtySelectorContainer>
    )

}

export default QtySelector