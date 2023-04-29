import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import { Box, Input, Modal, Typography } from '@mui/material'

const Cards = ({ pokemon }) => {
    const [showModal, setShow] = useState<boolean>(false)
    const handleClose = () => setShow<boolean>(false)
    const handleShow = () => setShow<boolean>(true)
    const [pokeName, setPokeName] = useState<string>('')
    const [pokeHeight, setPokeHeight] = useState<string>('')
    const [pokeWeight, setPokeWeight] = useState<string>('')
    const [pokeImg, setPokeImg] = useState()
    const [searchInput, setSearchInput] = useState<string>('')

    const openPokeInfo = async (res): Promise<any> => {
        setPokeName(res.name)
        setPokeHeight(res.height)
        setPokeWeight(res.weight)
        setPokeImg(res.sprites.front_default)
        handleShow()
    }

    const PokemonWrapper = styled('div')({
        fontSize: 20,
        backgroundColor: 'lavender',
        width: 200,
        height: 200,
        margin: 10,
    })

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <img src={pokeImg} alt="Responsive image"></img>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {pokeName}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Height : {pokeHeight}
                        Weight : {pokeWeight}
                    </Typography>
                </Box>
            </Modal>
            <div>
                <Input
                    sx={{
                        width: 500,
                        backgroundColor: 'lavender',
                    }}
                    type="text"
                    onChange={(event) => {
                        setSearchInput(event.target.value)
                    }}
                    placeholder="Search"
                />
            </div>

            <div>
                {pokemon
                    .filter((item) => {
                        if (searchInput == '') {
                            return item
                        } else if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                            return item
                        }
                    })
                    .map((item) => {
                        return (
                            <PokemonWrapper key={item.id * Math.random()} onClick={() => openPokeInfo(item)}>
                                <img src={item.sprites.front_default} alt="Card image cap"></img>
                                <h5>{item.name}</h5>
                            </PokemonWrapper>
                        )
                    })}
            </div>
        </div>
    )
}
export default Cards
