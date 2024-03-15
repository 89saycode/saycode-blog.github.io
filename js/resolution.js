function escapeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// 示例用法
let codeElement = document.querySelector('code');
codeElement.innerHTML = escapeHTML(codeElement.innerHTML);