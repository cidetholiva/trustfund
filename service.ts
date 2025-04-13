import dotenv from 'dotenv'; 
import axios from 'axios';

dotenv.config(); 

export const createAccount = async(form): Promise<any> => {
    let body = {
        first_name: form.first_name,
        last_name: form.last_name,
        state: form.state,
        zip: form.zipcode,
        account_number: form.account_number,
        parent_id: "N/A",
        type: form.type
    }
    const res = await axios.post('/api/create-customer', body);
    return res.data;
}

export const addDependent = async(form): Promise<any> => {
    let create_body = {
        first_name: form.first_name,
        last_name: form.last_name,
        state: form.state,
        zip: form.zipcode,
        account_number: form.account_number,
        type: form.type
    }
    const account_info = (await axios.post('/api/create-customer', create_body)).data();

    let add_dependent_body ={
        parent_id: form.parent_id,
        dependent_id: account_info.customer_id
    }

    const added = await axios.post('/api/add-dependent', add_dependent_body);
    return added.data;
}

//should get customer account info with dependent info...
export const login = async(first): Promise<any> => {
    let body = {
        first_name: first
    }
    const res = await axios.post('/api/login', body);
    return res.data;
}

//transfers money to dependents
export const transfer = async(amount, payee_id, description): Promise<any> => {
    let body = {
        amount:amount,
        payee_id:payee_id,
        description:description
    }
    const res = await axios.post('/api/login', body);
    return res.data;
}
