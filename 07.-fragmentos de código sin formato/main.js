
  const copyCodeButton = document.querySelector('.code-header__button');
  copyCodeButton.addEventListener('click', function() {
    const codeElement = document.querySelector('pre code');
    const textToCopy = codeElement.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  });
