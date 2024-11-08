- Thành viên:
 + Mã Trường Quang - 52100925
 + Nguyễn Ngọc Hương Giang -52100019
 + Huỳnh Thị Mộng Trinh - 52100132

- Hướng dẫn chạy code:
	+ Clone git từ gitlab về
	+ Mở thư mục vừa clone về bằng Visual Studio Code
	+ Chạy lệnh npm install trong terminal
	+ Chạy lệnh node index.js
	+ Mở trình duyệt bất kỳ có thể là Cốc cốc, Google Chrome hay Microsoft Edge và gõ http://localhost:3000/ vào url để mở lên giao diện web
	+ Đầu tiên người dùng sẽ nhìn thấy giao diện login, người dùng tiến hành nhập thông tin đăng nhập vào để đi đến giao diện chính. Đối với lần chạy đầu tiên người dùng chưa có tài khoản cá nhân, chỉ có thể chạy tài khoản của admin với username = admin và password = admin
	+ Sau khi nhập vào thì người dùng có thể truy cập vào trang của admin. Tại đây admin có thể xem được danh sách các các nhân viên. Ở đây bạn có thể tạo thêm nhân viên mới và khi tạo thêm nhân viên thì hệ thống sẽ gửi mail về cho nhân viên dó và nhân viên phải thông qua link đó để kích hoạt hoặc đăng nhập vào hệ thống. 
	+Hệ thống sẽ hiển thị trang quản lý nhân viên và trang này chỉ dành cho admin tháo tác và nhìn thấy. Ở đây admin sẽ có thể thêm xóa sửa nhân viên tùy ý
	+Tiếp theo là Sản phẩm: Mục này admin có thể thêm xóa sửa sản phẩm, mục này chỉ dành riêng cho admin mới có thể thao tác thoi
	+Chức năng khách hàng thì ở đây admin sẽ có thể xem được danh sách khách hàng đã mua hàng và khi nhấn vào chi tiết thì có thể xem được toàn bộ lịch sử mua hàng của khách hàng đó cũng như chi tiết đơn đó khách hàng mua gì.
	+Chức năng báo cáo thì ở đây admin có thể xem được doanh thu bán hàng, ở đây có mục lọc nhanh và lọc từ ngày nào đến ngày nào. Và đặc biệt ở đây có mục lợi nhuận chỉ có mình admin mới có thể thấy được nó. Còn nhân viên thì không thể thấy. Và bên dưới sẽ hiển thị tất cả các hóa đơn như bạn đã lọc
	+Đối với người dùng sao khi kích hoạt tài khoản và tiến hành đăng nhập vào thì sẽ nhìn thấy trang bán hàng. Ở trang này người bán có thể tìm theo tên hoặc theo mã sản phẩm, Nếu bạn có sẵn mã sản phẩm bạn cũng có thể thêm trực tiếp bằng mã sản phẩm. Sau đó chúng ta sẽ tiến hành xin thông tin khách hàng. Khi nhập số điện thoại khách hàng. Nếu khách hàng đó mua rồi thì hệ thống sẽ tự động điền thông tin còn nếu chưa mua thì chúng ta phải xin đủ thông tin nếu không hệ thống sẽ báo lỗi. Và chúng ta phải nhập số tiền khách mua vào nếu không nhập chúng ta cũng sẽ không lưu hóa đơn được. Nếu số tiền nhập vào ít hơn tổng số tiền thì hệ thống cũng sẽ báo lỗi
	+về chức năng báo cáo là xem danh sách người dùng, xem lịch sử mua hàng của khách hàng cũng tương tự bên admin nhưng bên phần báo cáo doanh thu sẽ không thấy được phần lợi nhuận
	+Phần sản phẩm thì nhân viên chỉ có thể xem danh sách sản phẩm chứ không được quyền thao tác.
	+Chức năng chỉnh sửa thông tin cá nhân và đổi mật khẩu cả admin và nhân viên điều giống nhau. Sửa thông tin thì nhấn vào thông tin và tiến hành nhập thông tin mình muốn sửa và nhấn lưu. Còn đổi mật khẩu thì tiến hành nhập mật khẩu mới và nhập lại mật khẩu mới nếu nhập lại không đúng sẽ hiện trang lỗi 500 còn nếu đúng thì hệ thống sẽ tự động đăng xuất và chúng ta phải tiến hành đăng nhập lại.
	+Nhân viên đăng nhập lần hai thì không cần thông qua link gửi từ mail.



- Link Drive Video demo:
https://drive.google.com/drive/folders/10wAvx_HK2ovvmPtclpNy0ORHqOkLyRup?usp=sharing