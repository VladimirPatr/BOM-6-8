import modulesConst from './constans.js';

const {
  checkModal,
  inputModalSale,
  totalPriceModal,
  inputModalPrice,
  inputModalCount,       
} = modulesConst;



//чекбокс и инпут в модальном окне
// const checkboxInput = () => {
//     checkModal.addEventListener('change', (e) => {
//       if (e.target.checked) {
//         inputModalSale.disabled = false;
//       } else {
//         inputModalSale.disabled = true;
//         inputModalSale.value = " ";
//       };
//     });
//     };
    
    // //функция событий при отправке форме
    // const sendingForm = () => {
    //   formModal.addEventListener('submit', e => {
    //     e.preventDefault();
       
    //     const formData = new FormData(e.target);
    
    //     const newProduct = Object.fromEntries(formData);
    
    //     tBody.append(createRow(newProduct));
    //     form.reset();
    //     overlayModal.classList.remove('visible');
    //     calculationTotalPriceTable();
    
    //   });
    // };
    
  
    //расчет общей стоимости на форме при изменнии инпутов
    const calculationTotalPrice = () => {
        if (inputModalPrice !== ' ' & inputModalCount !== ' '){
          let totalPrice = inputModalPrice.value*inputModalCount.value;
          if (inputModalSale.value == 'METHED'){
            totalPrice -= totalPrice/10;       
        };
        totalPriceModal.textContent = totalPrice;
      };
    };
  
  //собития при изменении фокуса инпутов формы
  // const priceFocus = () => {
  //   inputModalPrice.addEventListener('blur', e => {
  //     calculationTotalPrice();
  //   });
  // };
  
  
  // const countFocus = () => {
  //   inputModalCount.addEventListener('blur', e => {
  //     calculationTotalPrice();
  //   });
  // };
  
  
  // const saleFocus = () => {
  //   inputModalSale.addEventListener('blur', e => {
  //     calculationTotalPrice();
  //   });
  // };

  export default {
    // checkboxInput,
    // sendingForm,
    calculationTotalPrice,
    // priceFocus,
    // countFocus,
    // saleFocus,
  };