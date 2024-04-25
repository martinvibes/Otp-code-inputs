document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('#otp-inputs input')
    otpInputs[0].focus()

    otpInputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        let inputValue = event.target.value.trim()
        if (inputValue.length === 1) {
            if (index < otpInputs.length - 1) {
              otpInputs[index + 1].focus()
            }
        }
      })

    input.addEventListener('paste', (event) => {
        event.preventDefault();
        const pastedData = (event.clipboardData || window.clipboardData).getData('text');
        const digits = pastedData.match(/\d/g);
        if (digits && digits.length === 6) {
            digits.forEach((digit, i) => {
            if (i < otpInputs.length) {
                otpInputs[i].value = digit;
                otpInputs[i].focus()
            } else {
                return;
            }
          });
        }
    });

    // input.addEventListener('paste', function (event) {
    //     event.preventDefault();
    //     let pasteData = (event.clipboardData || window.clipboardData).getData('text');
    //     const dta = pasteData.match(/\d/g)
    //     if (dta && dta.length === 6) {
    //         for (let i = 0; i < 6; i++) {
    //             if (i < otpInputs.length) {

    //                 otpInputs[i].value = dta[i]
    //             }
    //         }
    //     }
    // });
    
    
    input.addEventListener('keydown', (e) => {
      // left arrow
      if (e.keyCode == 37) {
        if (index > 0) {
            e.preventDefault()
            otpInputs[index - 1].focus()
            otpInputs[index - 1].select()
        }
        return
      }

    //   right arrow
      if (e.keyCode ==  39) {
        if (index < otpInputs.length) {
            e.preventDefault()
            otpInputs[index + 1].focus()
            otpInputs[index + 1].select()
        }
        return
      }
    
    //   backspace button
      if (e.keyCode == 8) {
        if (index > 0) {
            e.preventDefault()
            otpInputs[index - 1].focus()
            otpInputs[index].value = ''
        }
        return
      }

    // delete  button
      if (e.keyCode == 46) {
        if (index < otpInputs.length) {
            otpInputs[index + 1].focus()
            otpInputs[index].value = ''
        }
        e.preventDefault()
        return
      }

    })

    })
  
})