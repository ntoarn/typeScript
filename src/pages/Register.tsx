import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import { User } from "~/interfaces/User";

import instance from "~/apis";
import { useNavigate } from "react-router-dom";



const userSchema = Joi.object({
  email: Joi.string().email({tlds: false}).required(),
  password: Joi.string().required().min(8),
})
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(userSchema)
  });
  const onSubmit = (user: User) =>{
    console.log(user);
    (async() =>{
      const { data } = await instance.post('/users', user);
      if(data.user){
        const isConfirm = confirm("dang ky thanh cong");
        if(isConfirm){
          navigate("/login");
        }
      }
    })()
    
  }

  return (
    <div>
      <h2>Dang Ky</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            {...register("email", {required: true})}
          />
          {errors.email && (<span className="text-danger">{errors.email.message}</span>)}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            {...register("password", {required: true, minLength:8})}
          />
          {errors.password && (<span className="text-danger">{errors.password.message}</span>)}
        </div>
        <button type="submit" className="btn btn-primary" w-100>
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;