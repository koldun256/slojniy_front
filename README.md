# Sber x ПРОСТО 2024 Хакатон
Фронтенд для кейса №2. [\[Бэк\]](https://github.com/Vainslav/slojno)

Принимает от сервера JSON, описывающий структуру страницы в виде иерархии компонентов, и строит по нему интерфейс.
Пример такого JSONа:
```json
{
  "type": "Flexbox",
  "data": [
    {
      "type": "Text",
      "web-content": "$basket.count(1)",
      "mobile-content": "asdf"
    },
    {
      "type": "Text",
      "content": "world",
      "classes": ["bold"]
    },
    {
      "type": "Image",
      "src": "/image.jpg",
      "alt": "pudge"
    },
    {
      "type": "Button",
      "onclick": "$basket.add(1)",
      "label": "Add"
    }
  ]
}
```
