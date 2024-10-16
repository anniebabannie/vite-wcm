import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
}

export const Home = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    const resp = await fetch('http://localhost:5173/chapters/new', { 
        method: 'POST', 
        body: JSON.stringify(data),
      })
    const json = await resp.json()
    console.log(json)
  }

  return (
    <div>
      <h1>Peach Boy Comic</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")}/>
        {errors.name && <span>This field is required</span>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
