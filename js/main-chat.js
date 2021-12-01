document
    .getElementById('send').addEventListener('click', function() {
        const now = new Date();
        const userNameInput = document.getElementById('add-username');
        const messageInput = document.getElementById('add-message');
            userNameInput.classList.remove('emptyform')
            messageInput.classList.remove('emptyform')

        if (userNameInput.value == '' && messageInput.value == '') {
            userNameInput.classList.add('emptyform')
            messageInput.classList.add('emptyform')
            return false;
        }
        
        const newUserNameMessage = 
            `<div class="msg to">
                <span class="text-muted">${now}</span></br>
                <span class="pres"><b>${userNameInput.value}:</b></span>
                    <p>- ${messageInput.value}</p>
            </div>`;

            document.getElementById('msgs').innerHTML += newUserNameMessage;
        
            userNameInput.value = '';
            messageInput.value = '';
           
        
    });

    