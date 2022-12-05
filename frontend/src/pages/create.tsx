// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ethers } from "ethers"

declare let window: any

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>BitBlock</title>
      </Head>

      <Heading as="h3" my={4}>Create Event</Heading>
      <VStack>
        <Box w='100%' my={4}>
          <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="validateAndCreate" method="POST">
            <h4>Create Event</h4>

            <label for="eventNameCreate">Event name:</label><br />
            <input name="eventNameCreate" type="text" size="20" value="" required />

            <label for="ticketQuantityCreate">Number of tickets:</label><br />
            <input name="ticketQuantityCreate" type="number" size="4" min="1" max="100000" value="" required />

            <label for="ticketPrice">Price per ticket:</label><br />
            <input name="ticketPrice" type="number" size="4" min="10" max="500" value="" required />

            <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
            <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
          </form>
        </Box>
      </VStack>
    </>
  )
}

export default Create