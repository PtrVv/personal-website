document.getElementById('copyImg').addEventListener('click', () => {
    const textToCopy = 'petervasilev46@gmail.com';
    navigator.clipboard.writeText(textToCopy).then(() => {
        const message = document.getElementById('copiedMessage');
        message.classList.remove('hidden');
        message.classList.add('show');
        setTimeout(() => {
            message.classList.remove('show');
            message.classList.add('fade-out'); // Adding fade-out for slow opacity change
        }, 2000); // Message stays visible for 2 seconds before starting fade-out

        // Optionally, hide the message completely after the fade-out transition is done
        setTimeout(() => {
            message.classList.add('hidden');
        }, 4000); // Hides the message after 4 seconds (2 seconds for fade-out)
        
    }).catch(err => console.error('Failed to copy text:', err));
});
