# Hiểu về JSX 

## Khái niệm
JSX là cú pháp mở rộng của Javascript, được sử dụng phổ biến nhất trong ứng dụng ReactJS. JSX cho phép viết mã tương tự HTML bên trong file Javascript. Các thẻ JSX tương tự HTML nhưng được chuyển đổi thành các lệnh Javascript để React có thể hiểu và render chúng thành HTML thực tế trên trình duyệt.

## Ví dụ
```javascript
const Welcome = (props) => {
  return <h1>Xin chào, {props.name}!</h1>;
};
```
Trong đoạn mã này:

- Thẻ `<h1>` bên trong hàm `Welcome` là JSX.
- `{props.name}` là cách để nhúng một biến JavaScript vào JSX.

Khi biên dịch, Babel (trình biên dịch của React) sẽ chuyển đổi JSX thành JavaScript thuần tuý như:

```javascript
const Welcome = (props) => {
  return React.createElement('h1', null, `Xin chào, ${props.name}!`);
};
```