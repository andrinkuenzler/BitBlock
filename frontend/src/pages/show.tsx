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

      <Heading as="h3" my={4}>Create Event</Heading>
      <VStack>
        <Box w='100%' my={4}>
          <form onsubmit="" action="" method="">
            <h4>Get Entry</h4>

            <label for="eventNameEntry">Event name:</label><br />
            <input name="eventNameEntry" type="text" size="20" value="" required />

            <button type="submit" name="send">Send</button>
            <button type="reset" name="delete">Delete</button>
          </form>
        </Box>
      </VStack>
    </>
  )
}

export default Create