import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../scss/stylesheet.scss';

interface Form {
  email: string;
  name: string;
  textArea: string;
}

function FormProduct() {

  const [form, setForm] = useState<Form>({ email: "", name: "", textArea: "" })

  //make a function for work in form later, for now the prevent default and console.log are enought

  return (
    <div className="container form">

      {/* <Form onSubmit={(e) => {e.preventDefault(); console.log(form)}}> */}
      <Form>

        <div className="row">

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control className='form__input' type="" placeholder="Nome completo" required
                value={form.name}
                onChange={(e) => setForm({
                  ...form,
                  name: e.currentTarget?.value || "",
                })}
              />
            </Form.Group>
          </div>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Endereço de Email</Form.Label>
              <Form.Control className='form__input' type="email" placeholder="email" required
                value={form.email}
                onChange={(e) => setForm({
                  ...form,
                  email: e.currentTarget?.value || "",
                })}
              />
            </Form.Group>
          </div>

        </div>

        <Form.Group className="mb-3" controlId="textArea">
          <Form.Label>Entre com a sua mensagem: </Form.Label>
          <Form.Control className='form__input' type="textarea" placeholder="Mensagem" required
            value={form.textArea}
            onChange={(e) => setForm({
              ...form,
              textArea: e.currentTarget?.value || "",
            })}
          />
        </Form.Group>

        <Button className='form__btn' type="submit">Enviar Formulário</Button>

      </Form>
    </div>

  )
}

export default FormProduct;












// import { useCallback, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../scss/stylesheet.scss';

// interface Form {
//   email:string;
//   name:string;
//   textArea:string;
// }

// function FormProduct() {

//   const [form, setForm] = useState<Form>({email:"", name:"", textArea:""})

//   const getSubmit = useCallback((event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(form)
//     // const {email, name, textArea} = form

//     // if (!email || !name || !textArea) {
//     //   console.log('erro')
//     //   console.log(form)
//     //   return
//     // } else {
//     //   console.log(form)
//     // }

//   },[])


//   return (
//     <div className="container form">

//       <Form onSubmit={(event) => getSubmit(event)}>
//       {/* <Form onSubmit={(e) => {e.preventDefault(), getSubmit}}> */}
//       {/* <Form onSubmit={(e) => {e.preventDefault(), console.log(form)}}> */}

//         <Form.Group className="mb-3" controlId="email">
//           <Form.Label>Endereço de Email</Form.Label>
//           <Form.Control type="email" placeholder="email" required
//           value={form.email}
//           onChange={(e) => setForm({
//             ...form,
//             email:e.currentTarget?.value || "",
//           })}
//           />
//           <Form.Text className="text-muted">
//             Nunca divulgaremos os seus dados
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="name">
//           <Form.Label>Nome Completo</Form.Label>
//           <Form.Control type="" placeholder="Nome completo" required 
//           value={form.name}
//           onChange={(e) => setForm({
//             ...form,
//             name:e.currentTarget?.value || "",
//           })}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="textArea">
//           <Form.Label>Entre com a sua mensagem: </Form.Label>
//           <Form.Control type="textarea" placeholder="Mensagem" required
//           value={form.textArea}
//           onChange={(e) => setForm({
//             ...form,
//             textArea:e.currentTarget?.value || "",
//           })}
//           />
//         </Form.Group>

//         <Button type="submit">Enviar mensagem</Button>

//       </Form>
//     </div>

//   )
// }

// export default FormProduct;