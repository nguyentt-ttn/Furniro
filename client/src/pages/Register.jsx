import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: async (user) => {
      console.log("Registering user:", user);
      const response = await api.post("/register", user);
      return response.data;
    },
    onSuccess: () => {
      message.success("Đăng ký thành công");
      nav("/login");
    },
    onError: (error) => {
      if (error.response) {
        // Xử lý lỗi trả về từ backend
        if (error.response.status === 409) {
          const errorMessage = error.response.data.message;
          if (errorMessage.includes("Email")) {
            form.setFields([
              {
                name: "email",
                errors: [errorMessage],
              },
            ]);
          } else if (errorMessage.includes("Username")) {
            form.setFields([
              {
                name: "username",
                errors: [errorMessage],
              },
            ]);
          }
        } else if (error.response.status === 400) {
          form.setFields([
            {
              name: "email",
              errors: ["Dữ liệu không hợp lệ, vui lòng kiểm tra lại!"],
            },
          ]);
        } else {
          message.error("Đã có lỗi xảy ra, vui lòng thử lại");
        }
      }
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="flex ">
        <div
          className="w-2/3 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/27402369/pexels-photo-27402369/free-photo-of-thien-nhien-th-c-v-t-hoa-s-phat-tri-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            height: "75vh",
          }}
        ></div>
        <div className="w-2/3 flex flex-col-reverse justify-center items-center">
          <div className="w-full max-w-[500px] p-8 bg-white rounded-lg shadow-md">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="https://images.pexels.com/photos/23070734/pexels-photo-23070734/free-photo-of-trang-tri-b-c-t-ng-nh-phim-ho-t-hinh-m-t-m-nh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus
              </p>
            </div>
            <Form
              form={form}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email:"
                name="email"
                className="mb-4"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </Form.Item>

              <Form.Item
                label="Username:"
                name="username"
                className="block text-gray-700 mb-4"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                  { min: 3, message: "Username tối thiểu 3 ký tự" },
                ]}
              >
                <Input
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </Form.Item>

              <Form.Item
                label="Password:"
                name="password"
                className="mb-4 relative"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  { min: 6, message: "Password tối thiểu 6 ký tự" },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                className="mb-4 flex items-center"
              >
                <Checkbox className="mr-2">Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full py-3 text-base font-semibold bg-blue-600 hover:bg-blue-900 rounded-lg"
                >
                  Register
                </Button>
                <div className="text-center mt-4">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
