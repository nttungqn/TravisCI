# Travis CI

## Các bước thực hiện

1. Vào trang **Travis CI** với đường dẫn [https://travis-ci.org/]([Travis CI - Test and Deploy Your Code with Confidence](https://travis-ci.org/))

<img src="./images/2020-12-05-13-05-52-image.png" title="" alt="" data-align="center">

2. Xác thực kết nối đến **Github**
   
<img title="" src="https://user-images.githubusercontent.com/7784660/42060974-e6384036-7b28-11e8-9aa1-1535dabe0dee.jpg" alt="Authorize Travis at GitHub" data-align="center" width="707">

3. Cấp quyền *active* cho **Travis CI** để lấy thông tin các repositories từ **Github** về

<img src="./images/2020-12-05-13-16-20-image.png" title="" alt="" data-align="center">

<img src="https://user-images.githubusercontent.com/7784660/42060973-e61fe702-7b28-11e8-8e40-f99e26281750.jpg" title="" alt="Install Travis" data-align="center">

4. Chọn repository để test, ở đây mình chọn **TravisCI**

<img src="./images/2020-12-05-13-21-59-image.png" title="" alt="" data-align="center">

5. Thực hiện build lần đầu
   
<img src="./images/2020-12-05-14-36-13-image.png" title="" alt="" data-align="center">

6. Lịch sử những lần build
<img src="./images/2020-12-05-14-37-45-image.png" title="" alt="" data-align="center">

7. Dashboard build
   
<img src="./images/2020-12-05-14-55-16-image.png" title="" alt="" data-align="center">

8. Job log
   
   - Pass
     
   <img title="" src="./images/2020-12-05-14-56-41-image.png" alt="" data-align="center">
   
   - Fail
     
   <img src="./images/2020-12-05-14-57-59-image.png" title="" alt="" data-align="center">

# TravisCI Project

1. Cấu trúc thư mục

```
TravisCI
|_.travis.yml
|_hello.js
|_package.json
|_hello.test.js
|_other_files
```

2. Tạo file `.travis.yml` 
   
```json
language: node_js
node_js:
   - "node"
env:
- MY_VAR=EverythingYouWant
- NODE_ENV=TEST
...
```
   
   - Ở đây mình dùng nodejs nên set language là ngôn ngữ **node_js**
   
   - Dòng tiếp theo là version thì tùy vào phiên bản bạn muốn sử dụng mà có thể điền số tương ứng với phiên bản, **"node"** có nghĩa là đang sử dụng bản nodejs mới nhất
   
   - Tiếp theo **env** là set các biến môi trường khi cần thiết
   
   - Ngoài ra ta có thể cấu hình nhiều thứ khác nữa như **script, cache,..** mặc định khi test nó chạy lệnh **npm test**
     
     
