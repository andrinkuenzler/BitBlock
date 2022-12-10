// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import BuyTicket from 'components/BuyTicket'

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
          <BuyTicket 
            eventContract='0x5FbDB2315678afecb367f032d93F642f64180aa3'
            currentAccount={currentAccount}
          />
        </Box>
      </VStack>
    </>
  )
}

export default Show