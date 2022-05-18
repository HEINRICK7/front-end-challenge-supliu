import React, { useState } from 'react'
import { Modal } from 'antd'
import { Button, Form, Input } from './styled'
import { MdOutlineAdd, MdOutlineEdit } from 'react-icons/md'
import api from '../../../services/api'

const AddMusic = (props) => {
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState('')
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')

    const createMusic = async () => {
        const data = {
            album_id: props.albumId,
            number,
            title,
            duration,
        }

        await api.post('/track', data, {
            headers: {
                Authorization: "heinrickcostta@gmail.com"
            }
        })
            .then(() => {
                setVisible(false)
                props.reload()

            })
            .catch((err) => {
                alert(err.message);
                setVisible(false)

            })
    }
    const onChangeInputNumber = (e) => {
        setNumber(e.target.value)
    }
    const onChangeInputTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeInputDuration = (e) => {
        setDuration(e.target.value)
    }
    return (
        <>
            <Button onClick={() => setVisible(true)}>
                <MdOutlineAdd style={{ fontSize: 20 }} />
            </Button>
            <Modal
                title="Adicionar música"
                centered
                visible={visible}
                onOk={() => { createMusic() }}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <Form>
                    <Input
                        type="text"
                        placeholder="Digite o número da faixa"
                        onChange={onChangeInputNumber}
                        value={number}
                    />
                    <Input
                        type="text"
                        placeholder="Digite o nome da música"
                        onChange={onChangeInputTitle}
                        value={title}
                    />
                    <Input
                        type="text"
                        placeholder="Digite a duração da música"
                        onChange={onChangeInputDuration}
                        value={duration}
                    />
                </Form>

            </Modal>
        </>
    );
};

export default AddMusic;
