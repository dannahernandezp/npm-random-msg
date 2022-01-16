
const messages = [
    'Hola Mundo',
    'Hello World',
    'Hallo Welt',
    '你好世界',
    'こんにちは世界',
    'Olá Mundo',
    'Bonjour le monde'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg }