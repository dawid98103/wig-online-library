import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalState"
import { Button, Modal, Form } from 'semantic-ui-react'

const EditModal = ({ currentId, currentName, currentDescription, currentAuthor, currentPublishedBy, currentReleaseDate, currentSeries, currentNumberOfPages, currentPrice, currentImage, refresh }) => {
    const [open, setOpen] = useState(false);
    const [bookId, setBookId] = useState(currentId);
    const [name, setName] = useState(currentName);
    const [description, setDescription] = useState(currentDescription);
    const [author, setAuthor] = useState(currentAuthor);
    const [publishedBy, setPublishedBy] = useState(currentPublishedBy);
    const [releaseDate, setReleaseDate] = useState(currentReleaseDate);
    const [series, setSeries] = useState(currentSeries);
    const [numberOfPages, setNumberOfPages] = useState(currentNumberOfPages);
    const [price, setPrice] = useState(currentPrice);
    const [image, setImage] = useState(currentImage);
    const { editBook } = useContext(GlobalContext);

    const handleEditBook = () => {
        editBook({
            id: bookId,
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
        refresh()
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic color='blue'>Edytuj</Button>}>
            <Modal.Header>Edytuj pozycję</Modal.Header>
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
                    content="Edytuj"
                    labelPosition='right'
                    icon='edit'
                    onClick={() => handleEditBook()}
                    primary
                />
            </Modal.Actions>
        </Modal>
    )
}

export default EditModal;