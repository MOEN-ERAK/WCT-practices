document.getElementById('btn').onclick = () => {
    const inputValue = document.getElementById('input').value;

    document.getElementById('paragraph').textContent = inputValue;

    console.log(inputValue);
}