const urlAll = "http://localhost:5000/empleado/all";
const urlAdd = "http://localhost:5000/empleado/add";
const urlDelete = "http://localhost:5000/empleado/del";
const urlOne = "http://localhost:5000/empleado/one";
const urlUpdate = "http://localhost:5000/empleado/upd";

//Read
export const allEmpleados = async () =>{
    try {
        const empleados = await fetch(urlAll);
        const infoEmpleado = empleados.json();
        return infoEmpleado;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addEmpleado = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "empleado.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteEmpleado = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "empleado.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateEmpleado(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "empleado.html"
    } catch (error) {
        console.log(error);
    }
};