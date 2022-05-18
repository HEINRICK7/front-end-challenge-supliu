import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Background, Main, Header, Section, Input, Button, List, Ul, Li, MainAlbum, SectionAlbum, BackButton } from "./styled"

import api from '../../services/api'

import Img from "../../assets/background.png"
import Logo from "../../assets/logo.png"
import { FiArrowLeft } from 'react-icons/fi'

import { Pagination } from 'antd'

const PlayList = () => {
    const [list, setList] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('') 

    useEffect(() => {
        
        getAllAlbum()
        
    }, [])
    const getAllAlbum = async (page) => {
        await api.get(`/album?keyword=${search}&limit=10&page=${page}`,
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
                console.log(err)
            })
    }
    
    return (
        <Container>

            <Background>
                <img src={Img} alt="tc.png" />
            </Background>
            <Link to="/create-playlist">
                <BackButton><FiArrowLeft />Voltar</BackButton>
            </Link>

            <Main>

                <Header>
                    <img src={Logo} alt="logo" />
                    <p>Discografia</p>
                </Header>
                <Section>
                    <p>Digite uma palavra chave</p>
                    <Input 
                    type="text" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                    <Button onClick={() => getAllAlbum()}>Procurar</Button>
                    <List>
                        <Ul>
                            {list.map(res => (
                                <Li key={res.id}>
                                    <p ><strong>{`Album: ${res.name}, ${res.year}`}</strong></p>
                                    <MainAlbum>
                                        {res.tracks.map(res => (
                                            <>
                                                <SectionAlbum >
                                                    <div style={{ display: 'flex' }}>
                                                        <div>
                                                            <p>Nº</p>
                                                            <span style={{ color: '#454242' }}>{res.number}</span>
                                                        </div>
                                                        <div>
                                                            <p>Faixa</p>
                                                            <span style={{ color: '#454242' }}>{res.title}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Duração</p>
                                                        <span style={{ color: '#454242' }}>{res.duration}</span>
                                                    </div>
                                                </SectionAlbum>

                                            </>
                                        ))}

                                    </MainAlbum>
                                </Li>
                            ))}

                        </Ul>

                    </List>
                    <Pagination
                        style={{padding: '20px'}}
                        defaultCurrent={1}
                        total={totalPages}
                        onChange={(page) => {
                            getAllAlbum(page)
                        }}
                    />
                </Section>
            </Main>
        </Container>
    );
}

export default PlayList;
