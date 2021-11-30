import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalState"
import { Button, Modal, Form } from 'semantic-ui-react'

const AddModal = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedBy, setPublishedBy] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [series, setSeries] = useState("");
    const [numberOfPages, setNumberOfPages] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const { addBook } = useContext(GlobalContext);

    const handleAddBook = () => {
        addBook({
            name: name,
            description: description,
            author: author,
            publishedBy: publishedBy,
            releaseDate: releaseDate,
            series: series,
            numberOfPages: numberOfPages,
            price: price,
            image: image
        })

        setOpen(false);
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic color="green">Dodaj +</Button>}>
            <Modal.Header>Dodaj nową pozycję</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field required>
                            <label>Tytuł</label>
                            <input placeholder='Nazwa użytkownika' value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Field>
                        <Form.TextArea label='Opis' placeholder='Opis...' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <Form.Field>
                            <label>Autor</label>
                            <input placeholder='Autor' value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Wydawnictwo</label>
                            <input placeholder='Wydawnictwo' value={publishedBy} onChange={(e) => setPublishedBy(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Data publikacji</label>
                            <input placeholder='Data publikacji' value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Series</label>
                            <input placeholder='Seria' value={series} onChange={(e) => setSeries(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Liczba stron</label>
                            <input type='number' placeholder='Liczba stron' value={numberOfPages} onChange={(e) => setNumberOfPages(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Cena</label>
                            <input type='number' placeholder='Cena' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Zdjęcie</label>
                            <input type='url' placeholder='Zdjęcie' value={image} onChange={(e) => setImage(e.target.value)} />
                        </Form.Field>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cofnij
                </Button>
                <Button
                    content="Dodaj"
                    labelPosition='right'
                    icon='plus'
                    onClick={() => handleAddBook()}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default AddModal;