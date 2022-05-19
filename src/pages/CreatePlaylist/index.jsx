import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import {
    Container,
    Main,
    SectionLeft,
    SectionRight,
    ListAlbum,
    ListIcons,
    List,
    Ul,
    Li,
    MainAlbum,
    SectionAlbum,
    ButtonsInline,
    Button,
    SpanAlbum
} from './styled'

import Header from '../../components/Header'

import api from '../../services/api'

import { AiOutlineDelete } from 'react-icons/ai'
import { Popconfirm, message, Pagination } from 'antd';

import AddAlbum from '../../components/Modals/AddAlbum'
import AddMusic from '../../components/Modals/AddMusic'

const CreatePlaylist = () => {

    const [list, setList] = useState([])
    const [id, setId] = useState('')
    const [totalPages, setTotalPages] = useState(1);

    const key = 'updatable';

    useEffect(() => {

        getAllAlbum()

    }, [])
    const getAllAlbum = async (page) => {
        await api.get(`/album?page=${page}`,
            {
                headers: {
                    Authorization: "heinrickcostta@gmail.com"
                }
            })
            .then((res) => {
                setList(res.data.data)
                setTotalPages(res.data.total);
            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    const deletePlayList = async (id) => {
        try {
            await api.delete(`album/${id}`, {
                headers: {
                    Authorization: "heinrickcostta@gmail.com"
                }
            })
            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.success({ content: 'Álbum deletado com sucesso!', key, duration: 2 });

            }, 1000);
            getAllAlbum();
        }
        catch (error) {
            alert("Erro");
        }
    }
    const deleteMusic = async (id) => {

        try {
            await api.delete(`track/${id}`, {
                headers: {
                    Authorization: "heinrickcostta@gmail.com"
                }
            })
            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.success({ content: 'música deletada com sucesso!', key, duration: 2 });

            }, 1000);
            getAllAlbum();
        }
        catch (error) {
            alert("Erro");
        }

    }
    const handleFilterId = (id) => {
        setId(id)
    }
    const idAlbum = id;

    return (
        <Container>
            <Header />
            <ButtonsInline>
                <AddAlbum
                    reload={getAllAlbum} />
                <Link to="/playlist">
                    <Button>Playlist</Button>
                </Link>
            </ButtonsInline>

            <Main>
                <SectionLeft>
                    {list.map(res => (
                        <ListAlbum>
                            <ListIcons>
                                <AddMusic
                                    albumId={res.id}
                                    reload={getAllAlbum} />
                                <Popconfirm
                                    placement="top"
                                    title={'Você realmente deseja deletar este álbum?'}
                                    onConfirm={() => { deletePlayList(res.id) }}
                                    okText="Sim" cancelText="Não">
                                    <button ><AiOutlineDelete style={{ fontSize: 20 }} /></button>
                                </Popconfirm>

                            </ListIcons>
                            <SpanAlbum>Álbum: {res.name}</SpanAlbum>
                            <div className="vinyl" onClick={() => { handleFilterId(res.id) }}>
                                <div className="label">

                                </div>
                            </div>
                        </ListAlbum>
                    ))}
                    <Pagination
                        style={{ padding: '20px' }}
                        defaultCurrent={1}
                        total={totalPages}
                        onChange={(page) => {
                            getAllAlbum(page);
                        }}

                    />
                </SectionLeft>
                <SectionRight>
                    <List>
                        {list.filter(album => album.id === idAlbum)
                            .map(album => (
                                <Ul>
                                    <Li key={album.id}>
                                        <p ><strong>{`Album: ${album.name}, ${album.year}`}</strong></p>
                                        <MainAlbum>

                                            {album.tracks.map(tracks => (
                                                <SectionAlbum >

                                                    <div style={{ display: 'flex' }}>
                                                        <div>
                                                            <p>Nº</p>
                                                            <span style={{ color: '#454242' }}>{tracks.number}</span>
                                                        </div>
                                                        <div>
                                                            <p>Faixa</p>
                                                            <span style={{ color: '#454242' }}>{tracks.title}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Duração</p>
                                                        <span style={{ color: '#454242' }}>{tracks.duration}</span>
                                                    </div>

                                                    <ListIcons>
                                                        <Popconfirm
                                                            placement="top"
                                                            title={'Você realmente deseja deletar essa música?'}
                                                            onConfirm={() => { deleteMusic(tracks.id) }}
                                                            okText="Sim" cancelText="Não">
                                                            <button><AiOutlineDelete style={{ fontSize: 20 }} /></button>
                                                        </Popconfirm>

                                                    </ListIcons>


                                                </SectionAlbum>
                                            ))}
                                        </MainAlbum>
                                    </Li>
                                </Ul>
                            ))}
                    </List>
                </SectionRight>
            </Main>
        </Container>
    );
}

export default CreatePlaylist;
