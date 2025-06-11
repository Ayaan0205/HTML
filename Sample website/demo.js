const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        if (value === null) return;
        switch(value) {
            case 'C':
                display.textContent = '0';
                break;
            case '=':
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
                break;
            default:
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
        }
    });
});
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '0';
});
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
})