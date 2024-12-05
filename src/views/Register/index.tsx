import { Button, Form, Input, message } from "antd";
import './index.css'
import { register } from "../../api/user";

interface RegisterUser {
    username: string;
    password: string;
    password2: string;
}




const layout1 = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    }
}

const layout2 = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 }
}
const onFinish = async (values: RegisterUser) => {
    console.log(values);
    if(values.password !== values.password2) {
        return message.error('两次密码输入不一致，请重新输入')
    }

    try {
        const res = await register(values.username, values.password)
        if (res.status === 201 || res.status === 200) {
            message.success('注册成功')
            setTimeout(() => {
                window.location.href = '/login'
            }, 1000);
        }
    } catch (error:any) {
        message.error(error.response.data.message)
    }
}

export function Register() {

    
    return <div id="register-container">
        <h1>图书管理系统</h1>
        <Form
            {...layout1}
            onFinish={onFinish}
            colon={false}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "请输入用户名",
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "请输入密码",
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="确认密码"
                name="password2"
                rules={[
                    {
                        required: true,
                        message: "请再次输入密码",
                    }
                ]}  
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                {...layout2}
            >
                <div className='links'>
                    <a href='/login'>已有账号？去登录</a>
                </div>
            </Form.Item>
            <Form.Item {...layout2}>
                <Button  className="btn" type="primary" htmlType="submit">注册</Button>
            </Form.Item>
        </Form>
    </div>;
}