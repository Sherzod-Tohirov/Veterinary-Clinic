let regexval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      function check() {
        let elinp = document.getElementById('form-inp');
        if (elinp.value.length == 0) {
          elinp.style.borderColor = '#dc4d41';
          elinp.classList.add('invalid');
        } else if(elinp.value.toLowerCase().match(regexval)){

        	elinp.style.borderColor = 'transparent';
            elinp.classList.remove('invalid');
        }
        else {
        	elinp.style.borderColor ='#dc4d41';
         	elinp.classList.add('invalid');
        }
      }
      function check_feedback() {
      	let name = document.getElementById('userName');
  		let email = document.getElementById('userEmail');
		let feedback = document.getElementById('userFeedback');
		console.log(email);

		if (name.value.length == 0) {
          	name.style.borderColor = '#dc4d41';
        	name.classList.add('invalid');
        } else {
    		name.style.borderColor = 'transparent';
            name.classList.remove('invalid');
        }
        if (email.value.length == 0) {
          	email.style.borderColor = '#dc4d41';
        	email.classList.add('invalid');
        } else if(email.value.toLowerCase().match(regexval)){

        	email.style.borderColor = 'transparent';
            email.classList.remove('invalid');
        }
        else {
        	email.style.borderColor ='#dc4d41';
         	email.classList.add('invalid');
        }
         if (feedback.value.length == 0) {
          	feedback.style.borderColor = '#dc4d41';
        	feedback.classList.add('invalid');
        } else { 
    		feedback.style.borderColor = 'transparent';
            feedback.classList.remove('invalid');
        }
    }