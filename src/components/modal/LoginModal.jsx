import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalState"
import { Button, Modal, Form } from 'semantic-ui-react'

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser } = useContext(GlobalContext);

    const handleLoginUser = () => {
        const user = loginUser({
            username: username
        })

        if (user !== undefined) {
            setOpen(false)
            setUsername("")
            setPassword("")
        }
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<a>Zaloguj</a>}>
            <Modal.Header>Zaloguj się</Modal.Header>
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
                    content="Zaloguj"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => handleLoginUser()}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default LoginModal;