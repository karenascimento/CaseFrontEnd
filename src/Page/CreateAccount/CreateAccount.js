import React, { useState } from 'react';
import './CreateAccount.css'; // Você pode criar um arquivo CSS para estilos personalizados

function CreateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        accountType: 'savings', // Tipo de conta padrão
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados da conta:', formData);
        alert('Conta criada com sucesso!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            accountType: 'savings',
        });
    };

    return (
        <div className="create-account-container">
            <h2>Abrir Conta Bancária</h2>
            
            <form onSubmit={handleSubmit} class="form">
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Tipo de Conta:</label>
                    <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                    >
                        <option value="poupanca">Poupança</option>
                        <option value="corrente">Corrente</option>
                        <option value="corrente">Salario</option>
                    </select>
                </div>
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
}

export default CreateAccount;
