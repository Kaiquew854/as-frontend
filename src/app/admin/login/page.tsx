"use client"
import { useState } from "react";
import { InputField } from '@/components/admin/InputField';

const Page =()=>{
    const [passwordInput, setpasswordInput] = useState('')
    return (
        <div>
            Painel ADM - login
                <InputField 
                type='password'
                value={passwordInput}
                onChange={e => setpasswordInput(e.target.value)}
                placeholder="Digite a senha"
                //errorMessage="teste 123"
                />
        </div>
    );
};

export default Page;