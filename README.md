# 🚀 react-native-toasti

A simple, customizable, and lightweight Toast library for React Native.
Show beautiful toast messages like **success**, **error**, and **info** with minimal setup.

---

## ✨ Features

- ✅ Easy to use API
- 🎨 Customizable UI
- ⚡ Lightweight & fast
- 📍 Multiple positions (top / bottom)
- ⏱ Auto dismiss support
- 🔥 Built with React Hooks

---

## 📦 Installation

### Using npm

```bash
npm install @npm_akash/react-native-toasti
```

---

## ⚙️ Setup

Wrap your root component with `ToastProvider`:

```js
import React from 'react';
import { ToastProvider } from '@npm_akash/react-native-toasti';
import Home from './Home';

export default function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}
```

---

## 🪝 Usage

```js
import React from 'react';
import { View, Button } from 'react-native';
import { Toast } from '@npm_akash/react-native-toasti';

const Home = () => {
  return (
    <View>
      <Button
        title="Success Toast"
        onPress={() => Toast.success('Saved successfully!', 'top')}
      />

      <Button
        title="Error Toast"
        onPress={() => Toast.error('Something went wrong!', 'center')}
      />

      <Button
        title="Info Toast"
        onPress={() => Toast.info('This is info', 'bottom')}
      />
    </View>
  );
};

export default Home;
```

---

### `show(message, type, position)`

| Param    | Type   | Default | Description                   |
| -------- | ------ | ------- | ----------------------------- |
| message  | string | —       | Toast message                 |
| type     | string | show    | show / success / error / info |
| position | string | bottom  | top / center / bottom         |

---

## 🤝 Contributing

Contributions are welcome!

---

## 📄 License & Author

MIT License.
Made with ❤️ by @npm_akash

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
