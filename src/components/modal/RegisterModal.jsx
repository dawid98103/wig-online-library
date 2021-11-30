import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalState"
import { Button, Modal, Form } from 'semantic-ui-react'

const RegisterModal = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { addUser } = useContext(GlobalContext);

    const handleRegisterUser = () => {
        addUser({
            username: username,
            password: password
        })
        setOpen(false)
        setUsername("")
        setPassword("")
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<a>Zarejestruj</a>}>
            <Modal.Header>Zarejestruj się</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field required>
                            <label>Nazwa użytkownika</label>
                            <input placeholder='Nazwa użytkownika' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Field>
                        <Form.Field required>
                            <label>Hasło</label>
                            <input placeholder='Hasło' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Field>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cofnij
                </Button>
                <Button
                    type="submit"
                    content="Zarejestruj"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => handleRegisterUser()}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default RegisterModal;