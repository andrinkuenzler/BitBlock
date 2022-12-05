// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ethers } from "ethers"

declare let window: any

const Show: NextPage = () => {
  return (
    <>
      <Head>
        <title>BitBlock</title>
      </Head>

      <Heading as="h3" my={4}>Purchase</Heading>
      <VStack>
        <Box w='100%' my={4}>
          <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="" action="" method="">
            <h4>Buy Ticket</h4>

            <label for="eventNameBuy">Event name:</label><br />
            <input name="eventNameBuy" type="text" size="20" value="" required />

            <label for="ticketQuantityBuy">Number of tickets:</label><br />
            <input name="ticketQuantityBuy" type="number" size="4" min="1" max="1" value="1" required />

            <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
            <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
          </form>
        </Box>
      </VStack>
    </>
  )
}

export default Show