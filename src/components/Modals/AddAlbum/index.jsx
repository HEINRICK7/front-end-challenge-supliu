import React, { useState } from 'react'
import { Modal, message } from 'antd'
import { Button, Form, Input } from './styled'

import api from '../../../services/api'

const AddAlbum = (props) => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('')
    const [year, setYear] = useState('')

    const key = 'updatable';
    const createAlbum = async () => {
        const data = {
            name,
            year
        }

        await api.post('/album', data, {
            headers: {
                Authorization: "heinrickcostta@gmail.com"
            }
        })
            .then(() => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Álbum adicionado com sucesso!', key, duration: 2 });

                }, 1000);
                setVisible(false)
                props.reload()

            })
            .catch((err) => {
                alert(err.message);
                setVisible(false)

            })
    }
    const onChangeInputAlbum = (e) => {
        setName(e.target.value)
    }
    const onChangeInputAno = (e) => {
        setYear(e.target.value)
    }
    return (
        <>
            <Button onClick={() => setVisible(true)}>
                Criar Álbum
            </Button>
            <Modal
                title="Criar Álbum"
                centered
                visible={visible}
                onOk={() => { createAlbum() }}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <Form>
                    <Input
                        type="text"
                        placeholder="Digite o nome do álbum"
                        onChange={onChangeInputAlbum}
                        value={name}
                    />
                    <Input
                        type="text"
                        placeholder="Digite o ano do álbum"
                        onChange={onChangeInputAno}
                        value={year}
                    />
                </Form>

            </Modal>
        </>
    );
};

export default AddAlbum;
